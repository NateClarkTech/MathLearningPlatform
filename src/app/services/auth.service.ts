// https://medium.com/@piotrkorowicki/angular-18-and-firebase-simplifying-user-authentication-a2c407370acc
// https://chatgpt.com/share/67847559-94ec-8007-bc83-6dc8a959a789

import { inject, Injectable, Signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, user, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  private user: Signal<User | undefined>;

  constructor() {
    // Convert the `user` observable to a signal, mapping `null` to `undefined`
    this.user = toSignal(
      user(this.auth).pipe(map((u) => u ?? undefined))
    );
  }

  /**
   * Login using email and password
   * @param email The user's email
   * @param password The user's password
   */
  public async loginWithEmailAndPassword(email: string, password: string) {
    try {
      const response = await signInWithEmailAndPassword(this.auth, email, password);
      if (response.user) {
        this.router.navigate(['/']); // Navigate to the home page after successful login
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  /**
   * Register a new user with email and password
   * @param email The user's email
   * @param password The user's password
   */
  public async registerWithEmailAndPassword(email: string, password: string) {
    try {
      const response = await createUserWithEmailAndPassword(this.auth, email, password);
      if (response.user) {
        console.log('Registration successful');
        this.router.navigate(['/']); // Navigate to the home page after successful registration
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  }

  /**
   * Logout the current user
   */
  public async logout() {
    try {
      await this.auth.signOut();
      this.router.navigate(['/login']); // Navigate to the login page after logout
    } catch (error) {
      console.error('Logout failed', error);
    }
  }

  public getUser(): User | undefined {
    return this.user();
  }
}
