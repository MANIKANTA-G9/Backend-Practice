import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  newlogin(): string {
    return "Login";
  }
}
