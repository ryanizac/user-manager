export type DeleteUser = {
  execute(args: DeleteUser.Args): Promise<DeleteUser.Result>;
};

export namespace DeleteUser {
  export type Args = {
    id: string;
  };

  export type Result = void;
}
