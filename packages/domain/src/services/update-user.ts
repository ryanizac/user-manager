import { PublicUserData } from "../mappers";

export type UpdateUser = {
  execute(args: UpdateUser.Args): Promise<UpdateUser.Result>;
};

export namespace UpdateUser {
  export type Args = {
    id: string;
    name?: string;
    email?: string;
    password?: string;
  };

  export type Result = PublicUserData;
}
