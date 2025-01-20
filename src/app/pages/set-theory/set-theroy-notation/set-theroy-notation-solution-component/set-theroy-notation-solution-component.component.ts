import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SetMemeberProblem } from '../set-member-problem-type';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-set-theroy-notation-solution',
  imports: [
    MatCardModule,
    MatButtonModule,
    MarkdownComponent
  ],
  templateUrl: './set-theroy-notation-solution-component.component.html',
  styleUrl: './set-theroy-notation-solution-component.component.scss'
})
export class SetTheroyNotationSolutionComponent {
  @Input() userAnswers: SetMemeberProblem[] = [];
  Array = Array;

  ngOnInit() {
    console.log(this.userAnswers);
  }
}
