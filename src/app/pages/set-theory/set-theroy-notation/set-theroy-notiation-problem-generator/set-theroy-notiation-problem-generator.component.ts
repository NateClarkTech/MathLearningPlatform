import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent, } from 'ngx-markdown';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { SetMemeberProblem } from '../set-member-problem-type'; 

export type SubsetProblem = {
  setA: Set<number>;
  setB: number;
  type: string;
  answer: boolean
};

@Component({
  selector: 'app-set-theroy-notiation-problem-generator',
  imports: [
    MatCardModule,
    MatInputModule,
    MarkdownComponent,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './set-theroy-notiation-problem-generator.component.html',
  styleUrl: './set-theroy-notiation-problem-generator.component.scss'
})
export class SetTheroyNotiationProblemGeneratorComponent {
  @Output() answerSender = new EventEmitter<SetMemeberProblem[]>();

  generatedProblems: any[] = [];
  Array = Array; // Expose Array to the template
  document = document;
  userAnswers: SetMemeberProblem[] = []; // To store user inputs

  constructor() {
    this.generatedProblems = [];
    for (let i = 0; i < 5; i++) {
      this.generatedProblems.push(this.generateMembershipProblem());
    }
  }

  private generateMembershipProblem(): SetMemeberProblem {
    let generatedSet = new Set<number>();
    let setSize = Math.floor(Math.random() * 5) + 1;
    let trueAnswer = Math.random() < 0.5;
    let questionNumber = -1;
    let randomNumberHelper = Math.random();

    while (generatedSet.size < setSize) {
      generatedSet.add(Math.floor(Math.random() * 10 + 1));
    }

    if (trueAnswer) {
      randomNumberHelper = Math.random() * setSize;
      questionNumber = Array.from(generatedSet)[Math.floor(randomNumberHelper)];
    } 
    else {
      do {
        questionNumber = Math.floor(Math.random() * 10);
      } while (generatedSet.has(questionNumber));
      
    }

    return { set: generatedSet, number: questionNumber, type: "membership", answer: trueAnswer, userAnswer: "" };
  }

  

  sendUserAnswers() {
    console.log(this.userAnswers);
    this.answerSender.emit(this.generatedProblems);
  }
}
  
