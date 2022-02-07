import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authChange = new Subject<boolean>();

  private user: User | null = null;

  register(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000000).toString(),
    };

    this.authChange.next(true);
  }

  login(authData: AuthData) {
    if (
      authData.email === this.user?.email &&
      authData.password === 'password'
    ) {
      this.user = {
        email: authData.email,
        userId: Math.round(Math.random() * 1000000).toString(),
      };

      this.authChange.next(true);

      return true;
    }

    return false;
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuthenticated() {
    return this.user !== null;
  }
}
