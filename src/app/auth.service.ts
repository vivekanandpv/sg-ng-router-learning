import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenModel } from './home/home.component';
import { jwtDecode } from 'jwt-decode';

export interface UserModel {
  name: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<UserModel | null>(null);

  user$ = this.userSubject.asObservable();

  constructor() {}

  login(model: TokenModel) {
    //  decode the token
    const details = jwtDecode(model.token) as any;

    //  emit the next user
    this.userSubject.next({
      name: details.name,
      roles: details.roles,
    });
  }

  logout() {
    //  set the user to null
    this.userSubject.next(null);
  }
}
