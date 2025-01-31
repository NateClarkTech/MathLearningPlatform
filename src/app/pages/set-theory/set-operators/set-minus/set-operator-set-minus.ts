import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { SetMinusProblemGeneratorComponent } from './set-operator-set-minus-problem-generator/set-operator-set-minus-problem-generator.component';
import { SetMinusSolutionGeneratorComponent } from './set-operator-set-minus-solution-generator/set-operator-set-minus-solution-generator.component';
import { SetMinusProblem } from './set-minus-problem.type';

@Component({
  selector: 'app-set-operator-set-minus-problem-page',
  imports: [
    MatTabsModule,
    MarkdownComponent,
    CommonModule,
    SetMinusProblemGeneratorComponent,
    SetMinusSolutionGeneratorComponent
  ],
  templateUrl: './set-operator-set-minus.component.html',
  styleUrl: './set-operator-set-minus.component.scss'
})
export class SetOperatorSetMinusComponent {
  userAnswered = false;
  userAnswers : SetMinusProblem[] = [];

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

  recieveUserAnswers($event : SetMinusProblem[]){
    console.log("Succussfully recieved user answers");
    console.log($event);
    this.userAnswers = $event;
    this.userAnswered = true;
  }
}
