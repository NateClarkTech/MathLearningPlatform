import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { UnionProblem } from './union-problem.type';

import { SetOperatorUnionProblemGeneratorComponent } from './set-operator-union-problem-generator/set-operator-union-problem-generator.component';
import { SetOperatorUnionSolutionGeneratorComponent } from './set-operator-union-solution-generator/set-operator-union-solution-generator.component';

@Component({
  selector: 'app-set-operator-union',
  imports: [
    MatTabsModule,
    MarkdownComponent,
    CommonModule,
    SetOperatorUnionProblemGeneratorComponent,
    SetOperatorUnionSolutionGeneratorComponent,
  ],
  templateUrl: './set-operator-union.component.html',
  styleUrl: './set-operator-union.component.scss'
})
export class SetOperatorUnionComponent {
  userAnswered = false;
  userAnswers : UnionProblem[] = [];

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

  recieveUserAnswers($event : UnionProblem[]){
    console.log("Succussfully recieved user answers");
    console.log($event);
    this.userAnswers = $event;
    this.userAnswered = true;
  }
}
