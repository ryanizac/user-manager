import { PublicUserData, UserData } from "@user-manager/domain";

export type UserMapper = {
  toPublicData(args: UserData): PublicUserData;
};
