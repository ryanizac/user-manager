import { CreateUserUseCase } from "../../../usecase";
import { makeIdGenerator } from "./id-generator";
import { makeUserMapper } from "./user-mapper";
import { makeUserRepository } from "./user-repository";
import { makeCreateUserValidator } from "./create-user-validator";

export function makeCreateUserUseCase() {
  const idGenerator = makeIdGenerator();
  const userMapper = makeUserMapper();
  const userRepository = makeUserRepository();
  const createUserValidator = makeCreateUserValidator();

  const usecase = new CreateUserUseCase({
    idGenerator,
    userMapper,
    userRepository,
    createUserValidator,
  });

  return {
    usecase,
    userRepository,
  };
}
