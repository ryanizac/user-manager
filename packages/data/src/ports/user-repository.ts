import { UserData } from "@user-manager/domain";

export type UserRepository = {
  exists(email: string): Promise<boolean>;
  create(data: UserData): Promise<void>;
};
