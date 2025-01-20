import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { NavbarComponent } from './shared/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'math-learning-platform';
  firestore = inject(Firestore);

  constructor() {

  }
}
