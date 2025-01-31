import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ComplementProblem } from './complement-problem.type';
import { SetOperatorComplementProblemGeneratorComponent } from './set-operator-complement-problem-generator/set-operator-complement-problem-generator.component'; 
import { SetOperatorComplementSolutionGeneratorComponent } from './set-operator-complement-solution-generator/set-operator-complement-solution-generator.component';

@Component({
  selector: 'app-set-operator-complement',
  imports: [
    MatTabsModule,
    MarkdownComponent,
    MatCardModule,
    CommonModule,
    SetOperatorComplementProblemGeneratorComponent,
    SetOperatorComplementSolutionGeneratorComponent,
  ],
  templateUrl: './set-operator-complement.component.html',
  styleUrl: './set-operator-complement.component.scss'
})
export class SetOperatorComplementComponent {
  userAnswered = false;
  userAnswers : ComplementProblem[] = [];

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

  recieveUserAnswers($event : ComplementProblem[]){
    console.log("Succussfully recieved user answers");
    console.log($event);
    this.userAnswers = $event;
    this.userAnswered = true;
  }
}
