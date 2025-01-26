import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { SetTheroyNotiationProblemGeneratorComponent } from "./set-theroy-notiation-problem-generator/set-theroy-notiation-problem-generator.component";
import { SetTheroyNotationSolutionComponent } from './set-theroy-notation-solution-component/set-theroy-notation-solution-component.component';
import { SetMemeberProblem } from './set-member-problem-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-set-theroy-notation',
  
  imports: [
    MatTabsModule,
    MarkdownComponent,
    SetTheroyNotiationProblemGeneratorComponent,
    SetTheroyNotationSolutionComponent,
    CommonModule
  ],
  templateUrl: './set-theroy-notation.component.html',
  styleUrl: './set-theroy-notation.component.scss'
})
export class SetTheroyNotationComponent {
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
