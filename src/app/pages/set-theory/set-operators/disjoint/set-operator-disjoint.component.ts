import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { SetOperatorDisjointProblemGeneratorComponent } from './set-operator-disjoint-problem-generator/set-operator-disjoint-problem-generator.component';
import { SetOperatorDisjointSolutionGeneratorComponent } from './set-operator-disjoint-solution-generator/set-operator-disjoint-solution-generator.component';
import { DisjointProblem } from './disjoint-problem.type';

@Component({
  selector: 'app-set-operator-disjoint',
  imports: [
    MatTabsModule,
    MarkdownComponent,
    CommonModule,
    SetOperatorDisjointProblemGeneratorComponent,
    SetOperatorDisjointSolutionGeneratorComponent
  ],
  templateUrl: './set-operator-disjoint.component.html',
  styleUrl: './set-operator-disjoint.component.scss'
})
export class SetOperatorDisjointComponent {
  userAnswered = false;
  userAnswers : DisjointProblem[] = [];

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

  recieveUserAnswers($event : DisjointProblem[]){
    console.log("Succussfully recieved user answers");
    console.log($event);
    this.userAnswers = $event;
    this.userAnswered = true;
  }
}
