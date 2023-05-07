import { CreateUserValidator } from "../../../ports";

export function makeCreateUserValidator(): CreateUserValidator {
  function checkStringsInObject<T extends object, Keys extends keyof T>(
    target: T,
    ...keys: Keys[]
  ): Keys[] {
    const invalids: Keys[] = [];

    keys.forEach((item) => {
      const value = target[item];

      if (typeof value !== "string" || value === "") {
        invalids.push(item);
      }
    });

    return invalids;
  }

  return {
    async validate(args) {
      const stringValues = checkStringsInObject(
        args,
        "name",
        "email",
        "password",
        "repeatPassword",
      );

      if (stringValues.length > 0) {
        return `The values \`${stringValues.join(", ")}\` must be strings`;
      }

      return undefined;
    },
  };
}
