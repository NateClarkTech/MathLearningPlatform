import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { SubsetProblem } from './subset-problem.type';
import { CommonModule } from '@angular/common';

import { SetTheroyNotationSubsetProblemGeneratorComponent } from './set-theroy-notation-subset-problem-generator/set-theroy-notation-subset-problem-generator.component';
import { SetTheroyNotationSubsetSolutionComponent } from './set-theroy-notation-subset-solution-component/set-theroy-notation-subset-solution-component.component';

@Component({
  selector: 'app-set-theroy-notation-subset',
  imports: [
    MatTabsModule,
    MarkdownComponent,
    CommonModule,
    SetTheroyNotationSubsetProblemGeneratorComponent,
    SetTheroyNotationSubsetSolutionComponent
  ],
  templateUrl: './set-theroy-notation-subset.component.html',
  styleUrl: './set-theroy-notation-subset.component.scss'
})
export class SetTheroyNotationSubsetComponent {
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
