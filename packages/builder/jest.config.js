const { name } = require("./package.json");

/** @satisfies {import("jest").Config} */
module.exports = {
  displayName: name,
  testMatch: ["**/*.spec.ts", "**/*.test.ts"],
};
