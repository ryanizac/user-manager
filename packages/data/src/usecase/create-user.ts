import { CreateUser, PublicUserData } from "@user-manager/domain";
import {
  IdGenerator,
  CreateUserValidator,
  UserRepository,
  UserMapper,
} from "../ports";
import { User } from "../entity";

export class CreateUserUseCase implements CreateUser {
  private createUserValidator: CreateUserValidator;
  private userRepository: UserRepository;
  private idGenerator: IdGenerator;
  private userMapper: UserMapper;

  constructor(requirements: CreateUserUseCase.Requirements) {
    this.createUserValidator = requirements.createUserValidator;
    this.userRepository = requirements.userRepository;
    this.idGenerator = requirements.idGenerator;
    this.userMapper = requirements.userMapper;
  }

  async execute(args: CreateUser.Args): Promise<PublicUserData> {
    if (args.password !== args.repeatPassword) {
      throw new Error("passwords must be the same");
    }

    const validatedOrMessage = await this.createUserValidator.validate(args);

    if (validatedOrMessage) {
      throw new Error(validatedOrMessage);
    }

    const email = args.email;
    const userExists = await this.userRepository.exists(email);

    if (userExists) {
      throw new Error("user already exists");
    }

    const id = await this.idGenerator.generate();
    const createAt = new Date();

    const user = new User({
      id,
      createAt,
      ...args,
    });

    await this.userRepository.create(user);

    return this.userMapper.toPublicData(user);
  }
}

export namespace CreateUserUseCase {
  export type Requirements = {
    userRepository: UserRepository;
    idGenerator: IdGenerator;
    createUserValidator: CreateUserValidator;
    userMapper: UserMapper;
  };
}
