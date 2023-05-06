import { PublicUserData } from "../mappers";

export type CreateUser = {
  execute(args: CreateUser.Args): Promise<CreateUser.Result>;
};

export namespace CreateUser {
  export type Args = {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
  };

  export type Result = PublicUserData;
}
