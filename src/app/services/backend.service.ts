import { Injectable } from '@angular/core';
import { User } from "../entities/user";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private user: User,
  ) {
  }
  pw: string = '123';
  usr: string = 'sme';
  login(password: string, email: string): boolean {
    if(this.pw==password && this.usr===email) {
      return true;
    } else {
      return false;
    }
    return false;
  }


}
