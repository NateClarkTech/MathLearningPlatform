import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { SubsetProblem } from './subset-problem.type';
import { CommonModule } from '@angular/common';

import { SetTheoryNotationSubsetProblemGeneratorComponent } from './set-theory-notation-subset-problem-generator/set-theory-notation-subset-problem-generator.component';
import { SetTheoryNotationSubsetSolutionComponent } from './set-theory-notation-subset-solution-component/set-theroy-notation-subset-solution-component.component';

@Component({
  selector: 'app-set-theory-notation-subset',
  imports: [
    MatTabsModule,
    MarkdownComponent,
    CommonModule,
    SetTheoryNotationSubsetProblemGeneratorComponent,
    SetTheoryNotationSubsetSolutionComponent
  ],
  templateUrl: './set-theory-notation-subset.component.html',
  styleUrl: './set-theory-notation-subset.component.scss'
})
export class SetTheoryNotationSubsetComponent {
  userAnswered = false;
  userAnswers : SubsetProblem[] = [];

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

  recieveUserAnswers($event : SubsetProblem[]){
    console.log("Succussfully recieved user answers");
    this.userAnswers = $event;
    this.userAnswered = true;
  }
}
