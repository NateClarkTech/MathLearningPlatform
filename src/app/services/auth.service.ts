// https://medium.com/@piotrkorowicki/angular-18-and-firebase-simplifying-user-authentication-a2c407370acc
// https://chatgpt.com/share/67847559-94ec-8007-bc83-6dc8a959a789

import { inject, Injectable, Signal, computed } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, user, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  private authState: Signal<User | null | undefined> = toSignal(user(this.auth));


  /**
   * Login using email and password
   * @param email The user's email
   * @param password The user's password
   */
  public async loginWithEmailAndPassword(email: string, password: string) {
    try {
      const response = await signInWithEmailAndPassword(this.auth, email, password);
      if (response.user) {
        this.handleAuthResponse(response);
      }
    } 
    catch (error: any) {
      let message = 'An error occurred:';
      console.error(message, error);
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
        this.handleAuthResponse(response);
      }
    } 
    catch (error: any) {
      let message = 'An error occurred:';
      console.error(message, error);
    }
  }

  /**
   * Logout the current user
   */
  public async logout() {
    try {
      this.handleAuthResponse(await this.auth.signOut());
    } 
    catch (error: any) {
      let message = 'An error occurred:';
      console.error(message, error);
    }
  }

  isLoggedIn(): Signal<boolean> {
    return computed(() => !!this.authState());
  }

  private async handleAuthResponse(response: any) {
    if (response) {
      this.router.navigate(['/']);
    }
  }

  public getUser(): Signal<User | null | undefined> {
    return this.authState;
  }
  
}
