import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { SetTheoryNotiationProblemGeneratorComponent } from "./set-theory-notiation-problem-generator/set-theory-notiation-problem-generator.component";
import { SetTheoryNotationSolutionComponent } from './set-theory-notation-solution-component/set-theory-notation-solution-component.component';
import { SetMemeberProblem } from './set-member-problem-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-set-theory-set-membership',
  
  imports: [
    MatTabsModule,
    MarkdownComponent,
    SetTheoryNotiationProblemGeneratorComponent,
    SetTheoryNotationSolutionComponent,
    CommonModule
  ],
  templateUrl: './set-theory-notation.component.html',
  styleUrl: './set-theory-notation.component.scss'
})
export class SetTheorySetMembershipComponent {
  userAnswered = false;
  userAnswers : SetMemeberProblem[] = [];

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

  recieveUserAnswers($event : SetMemeberProblem[]){
    console.log("Succussfully recieved user answers");
    this.userAnswers = $event;
    this.userAnswered = true;
  }
  
}
