export class User {
  constructor() {
      this.userId = 0;
      this.userName = '';
      this.password = '';
      this.emailId = '';
      this.birthDate = new Date();
  }

  userId: number;
  userName: string;
  password: string;
  emailId: string;
  birthDate: Date;
}
