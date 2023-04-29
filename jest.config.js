/** @satisfies {import("jest").Config} */
module.exports = {
  projects: ["<rootDir>/packages/**/jest.config.js"],
  preset: "ts-jest",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["**/*.spec.ts", "**/*.test.ts"],
};
