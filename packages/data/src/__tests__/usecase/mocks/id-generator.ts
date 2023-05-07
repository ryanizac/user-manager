import { IdGenerator } from "../../../ports";

export function makeIdGenerator(): IdGenerator {
  return {
    async generate() {
      return (Math.random() * 100000).toString().replace(".", "-");
    },
  };
}
