import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import {NgTemplateOutlet} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';
import { LoginNavComponent } from '../login-nav/login-nav.component';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    LogoutComponent,
    LoginNavComponent
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  loggedIn = inject(AuthService).isLoggedIn();

}
