import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-set-theory',
  imports: [
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './set-theory.component.html',
  styleUrl: './set-theory.component.scss'
})
export class SetTheoryComponent {

}
