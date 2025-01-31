import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { DemorganLawProblemGeneratorComponent } from './demorgan-law-problem-generator/demorgan-law-problem-generator.component';
import { DemorganLawSolutionGeneratorComponent } from './demorgan-law-solution-generator/demorgan-law-solution-generator.component';
import { DemorgansLawProblem } from './demorgans-law-problem.type';

@Component({
  selector: 'app-demorgan-law',
  imports: [
    MatTabsModule,
    MarkdownComponent,
    CommonModule,
    DemorganLawProblemGeneratorComponent,
    DemorganLawSolutionGeneratorComponent
  ],
  templateUrl: './demorgan-law.component.html',
  styleUrl: './demorgan-law.component.scss'
})
export class DemorganLawComponent {
  userAnswered = false;
  userAnswers : DemorgansLawProblem[] = [];

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

  recieveUserAnswers($event : DemorgansLawProblem[]){
    console.log("Succussfully recieved user answers");
    console.log($event);
    this.userAnswers = $event;
    this.userAnswered = true;
  }
}
