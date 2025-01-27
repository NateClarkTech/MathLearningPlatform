import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent, } from 'ngx-markdown';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SubsetProblem } from '../subset-problem.type';


@Component({
  selector: 'app-set-theory-subset-problem-generator',
  imports: [
    MatCardModule,
    MatInputModule,
    MarkdownComponent,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './set-theory-notation-subset-problem-generator.component.html',
  styleUrl: './set-theory-notation-subset-problem-generator.component.scss'
})
export class SetTheoryNotationSubsetProblemGeneratorComponent {

  @Output() answerSender = new EventEmitter<SubsetProblem[]>();

  generatedProblems: any[] = [];
  Array = Array; // Expose Array to the template
  document = document;
  userAnswers: SubsetProblem[] = []; // To store user inputs

  // Generate 10 problems
  constructor() {
    this.generatedProblems = [];
    for (let i = 0; i < 10; i++) {
      this.generatedProblems.push(this.generateMembershipProblem());
    }
  }

  private generateMembershipProblem(): SubsetProblem {
    let generatedSet = new Set<number>();
    let subset = new Set<number>();
    let setSize = Math.floor(Math.random() * 5) + 1;
    let trueAnswer = Math.random() < 0.5;
    let randomNumberHelper = Math.random();
    let type = "";
    let notationType = Math.random() < 0.5;

    while (generatedSet.size < setSize) {
      generatedSet.add(Math.floor(Math.random() * 10 + 1));
    }

    //generate a subset problem statement that is true
    if (trueAnswer) {
      //generate a set that is a subset of the generated set
      if (notationType) {
        type = "subset";
        for (let i = 0; i < Math.ceil(setSize * randomNumberHelper); i++) {
          subset.add(Array.from(generatedSet)[i]);
        }
      }
      //generate a set that is not a subset of the generated set
      else {
        type = "notsubset";
        for (let i = 0; i < Math.ceil(setSize * randomNumberHelper); i++) {
          subset.add(Math.floor(Math.random() * 10 + 1));
        }
        //Ensure the genereted subset is not a subset of the generated set
        let notSubset = false;
        do {
          for (let element of subset) {
            if (!generatedSet.has(element)) {
              notSubset = true;
              break;
            }
          }
          if (!notSubset) {
            subset.add(Math.floor(Math.random() * 10 + 1));
          }
        } while (!notSubset);
      }
    }
    //generate a subset problem that is false
    else {
      //generate a set that is not a subset of the generated set
      if (notationType) {
        type = "subset";
        for (let i = 0; i < Math.ceil(setSize * randomNumberHelper); i++) {
          subset.add(Math.floor(Math.random() * 10 + 1));
        }
        //Ensure the genereted subset is not a subset of the generated set
        let notSubset = false;
        do {
          for (let element of subset) {
            if (!generatedSet.has(element)) {
              notSubset = true;
              break;
            }
          }
          if (!notSubset) {
            subset.add(Math.floor(Math.random() * 10 + 1));
          }
        } while (!notSubset);
      }
      //generate a set that is a subset of the generated set
      else {
        type = "notsubset";
        for (let i = 0; i < Math.ceil(setSize * randomNumberHelper); i++) {
          subset.add(Array.from(generatedSet)[i]);
        }
      }
    }
    //return the generated problem
    return { set: generatedSet, subset: subset, type: type, answer: trueAnswer, userAnswer: null };
  }

  //send user answers to the parent component
  sendUserAnswers() {
    console.log(this.userAnswers);
    this.answerSender.emit(this.generatedProblems);
  }
}
  