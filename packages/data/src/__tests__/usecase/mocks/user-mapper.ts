import { UserMapper } from "../../../ports";

export function makeUserMapper(): UserMapper {
  return {
    toPublicData(args) {
      return {
        id: args.id,
        name: args.name,
        email: args.email,
        createAt: args.createAt,
      };
    },
  };
}
