import { UserData } from "@user-manager/domain";

export class User implements UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  createAt: Date;

  constructor(data: UserData) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.createAt = data.createAt;
  }
}
