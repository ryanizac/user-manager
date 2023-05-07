import { CreateUser } from "@user-manager/domain";

export type CreateUserValidator = {
  validate(args: CreateUserValidator.Args): Promise<string | undefined>;
};

export namespace CreateUserValidator {
  export type Args = CreateUser.Args;
}
