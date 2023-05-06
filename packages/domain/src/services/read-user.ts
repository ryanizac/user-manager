import { PublicUserData } from "../mappers";

export type ReadUser = {
  execute(args: ReadUser.Args): Promise<ReadUser.Result>;
};

export namespace ReadUser {
  export type Args = {
    id: string;
  };

  export type Result = PublicUserData;
}
