const { name } = require("./package.json");
const { preset } = require("../../jest.config");

/** @type {import("jest").Config} */
module.exports = {
  displayName: name,
  preset,
  testMatch: ["**/*.spec.ts", "**/*.test.ts"],
};
