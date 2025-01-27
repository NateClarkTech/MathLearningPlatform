import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { IntersectionProblem } from './intersection-problem.type';
import { SetOperatorIntersectionProblemGeneratorComponent } from './set-operator-intersection-problem-generator/set-operator-intersection-problem-generator.component';
import { SetOperatorIntersectionSolutionGeneratorComponent } from './set-operator-intersection-solution-generator/set-operator-intersection-solution-generator.component';

@Component({
  selector: 'app-set-operator-intersection',
  imports: [
    MatTabsModule,
    MarkdownComponent,
    CommonModule,
    SetOperatorIntersectionProblemGeneratorComponent,
    SetOperatorIntersectionSolutionGeneratorComponent,
  ],
  templateUrl: './set-operator-intersection.component.html',
  styleUrl: './set-operator-intersection.component.scss'
})
export class SetOperatorIntersectionComponent {
  userAnswered = false;
  userAnswers : IntersectionProblem[] = [];

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

  recieveUserAnswers($event : IntersectionProblem[]){
    console.log("Succussfully recieved user answers");
    console.log($event);
    this.userAnswers = $event;
    this.userAnswered = true;
  }
}
