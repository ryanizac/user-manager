import { makeCreateUserUseCase } from "./mocks";

describe("Test create user use case", () => {
  const baseUserArgs = Object.freeze({
    name: "ryan",
    email: "ryan@email.com",
    password: "qwerty@1",
    repeatPassword: "qwerty@1",
  });

  it("should create a user", async () => {
    const { usecase } = makeCreateUserUseCase();

    await expect(usecase.execute({ ...baseUserArgs })).resolves.toEqual(
      expect.objectContaining({
        id: expect.stringContaining(""),
        createAt: expect.any(Date),
      }),
    );
  });

  it("should make sure that the user was created", async () => {
    const { usecase, userRepository } = makeCreateUserUseCase();

    await expect(usecase.execute({ ...baseUserArgs })).resolves.not.toThrow();
    await expect(userRepository.exists(baseUserArgs.email)).resolves.toBe(true);
    await expect(userRepository.exists("any@email.com")).resolves.toBe(false);
  });

  it("should throw an error if the passwords are not the same", async () => {
    const { usecase } = makeCreateUserUseCase();

    await expect(
      usecase.execute({
        ...baseUserArgs,
        repeatPassword: "12345678",
      }),
    ).rejects.toThrow("passwords must be the same");
  });

  it("should throw an error if email of user already exists", async () => {
    const { usecase } = makeCreateUserUseCase();
    const createUser = () => usecase.execute({ ...baseUserArgs });

    await expect(createUser()).resolves.not.toThrow();
    await expect(createUser()).rejects.toThrow("user already exists");
  });
});
