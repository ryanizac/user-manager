import { User } from "../../entity";

function generateRandomID() {
  return (Math.random() * 100000).toString().replace(".", "-");
}

describe("Test user entity", () => {
  it("Should instantiate an user", () => {
    const id = generateRandomID();
    const name = "ryan";
    const email = "ryan@email.com";
    const password = "abcdef@1";
    const createAt = new Date();

    const user = new User({
      id,
      name,
      email,
      password,
      createAt,
    });

    expect(user).toEqual({
      id: expect.stringContaining(id),
      name: expect.stringContaining(name),
      email: expect.stringContaining(email),
      password: expect.stringContaining(password),
      createAt: expect.any(Date),
    });
  });
});
