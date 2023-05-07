import { UserData } from "@user-manager/domain";
import { UserRepository } from "../../../ports";

export function makeUserRepository(): UserRepository {
  const list: UserData[] = [];

  function findByEmail(email: string) {
    return list.find((item) => item.email === email);
  }

  return {
    async create(data) {
      list.push(data);
    },

    async exists(email) {
      return findByEmail(email) !== undefined;
    },
  };
}
