export interface IUser {
  id: string;
  email: string;
  username: string;
}

export class User {
  constructor(public email: string, public password: string, public username?: string) {}
}
