import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      setTimeout((): void => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  constructor() {}
}
