import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, FormBuilder, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { PasswordPolicy } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class RegisterComponent {
  
  private authService = inject(AuthService);
  private router = inject(Router);
  hide = signal(true);
  errorMessage = signal('');

  matchPasswordValidator(passwordControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) {
        return null; // Parent is not initialized yet.
      }
  
      const password = control.parent.get(passwordControlName)?.value;
      const passwordConfirm = control.value;
  
      return password === passwordConfirm ? null : { notSame: true };
    };
  }
  
  registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, this.matchPasswordValidator('password')]),
    },
  );

  constructor() {
  }

  updateErrorMessage() {
    if (this.registerForm.controls.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.registerForm.controls.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
    console.log(this.registerForm.hasError('notSame'));
  }

  // Method to handle form submission
  async onSubmit() {
    try {
      // Attempt to register with provided email and password
      await this.authService.registerWithEmailAndPassword(this.registerForm.controls.email.value!, this.registerForm.controls.password.value!);
      // If register is successful, navigate to the home page
      this.router.navigate(['/']);
    } catch (error) {
      // Display error message if registeration fails
      console.error('Registeration failed', error);
    }
  }
}
