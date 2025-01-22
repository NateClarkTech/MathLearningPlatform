import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent, } from 'ngx-markdown';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { SubsetProblem } from '../subset-problem.type';


@Component({
  selector: 'app-set-theroy-notation-subset-problem-generator',
  imports: [
    MatCardModule,
    MatInputModule,
    MarkdownComponent,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './set-theroy-notation-subset-problem-generator.component.html',
  styleUrl: './set-theroy-notation-subset-problem-generator.component.scss'
})
export class SetTheroyNotationSubsetProblemGeneratorComponent {
  @Output() answerSender = new EventEmitter<SubsetProblem[]>();

  generatedProblems: any[] = [];
  Array = Array; // Expose Array to the template
  document = document;
  userAnswers: SubsetProblem[] = []; // To store user inputs

  constructor() {
    this.generatedProblems = [];
    for (let i = 0; i < 5; i++) {
      this.generatedProblems.push(this.generateMembershipProblem());
    }
  }

  private generateMembershipProblem(): SubsetProblem {
    let generatedSet = new Set<number>();
    let subset = new Set<number>();
    let setSize = Math.floor(Math.random() * 5) + 1;
    let trueAnswer = Math.random() < 0.5;
    let randomNumberHelper = Math.random();

    while (generatedSet.size < setSize) {
      generatedSet.add(Math.floor(Math.random() * 10 + 1));
    }

    //generate a set that is the subset of the generated set
    if (randomNumberHelper < 0.5) {
      subset = new Set(Array.from(generatedSet).slice(0, Math.floor(Math.random() * setSize)));
    }
    else {
      //pass
    }

    return { set: generatedSet, subset: subset, type: "membership", answer: trueAnswer, userAnswer: "" };
  }

  

  sendUserAnswers() {
    console.log(this.userAnswers);
    this.answerSender.emit(this.generatedProblems);
  }
}
  