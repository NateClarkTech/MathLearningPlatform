import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent } from 'ngx-markdown';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { user } from '@angular/fire/auth';
import { DisjointProblem } from '../disjoint-problem.type';

@Component({
  selector: 'app-set-operator-disjoint-problem-generator',
  imports: [
    MatCardModule,
    MatInputModule,
    MarkdownComponent,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './set-operator-disjoint-problem-generator.component.html',
  styleUrl: './set-operator-disjoint-problem-generator.component.scss'
})
export class SetOperatorDisjointProblemGeneratorComponent {
  @Output() answerSender = new EventEmitter<DisjointProblem[]>();
  generatedProblems: DisjointProblem[] = [];

  Array = Array; // Expose Array to the template
  document = document;
  userAnswers: string[] = []; // To store user inputs

  constructor() {
    this.generatedProblems = [];
    for (let i = 0; i < 10; i++) {
      this.generatedProblems.push(this.generateMembershipProblem());
    }
  }

  private generateMembershipProblem(): DisjointProblem {
    let setA = new Set<string>();
    let setB = new Set<string>();
    let type = "disjoint";
    let setADisjointB = new Set<string>();
    let setASize = Math.floor(Math.random() * 7) + 1;
    let setBSize = Math.floor(Math.random() * 7) + 1;
    for (let i = 0; i < setASize; i++) {
      setA.add(Math.floor(Math.random() * 10 + 1).toString());
    }
    for (let i = 0; i < setBSize; i++) {
      setB.add(Math.floor(Math.random() * 10 + 1).toString());
    }

    setADisjointB = new Set();

    return { setA: setA, setB: setB, type: type, answer: setADisjointB, userAnswer: null };
  }

  sendUserAnswers() {
    let index = 0;
    for (let problem of this.generatedProblems) {
      let userAnswer = this.userAnswers[index];
      if (userAnswer){
        //Set handling will be done in solution component
        this.generatedProblems[index].userAnswer = userAnswer.split(',').map(item => item.trim());
      }
      index++;
    }
    this.answerSender.emit(this.generatedProblems);
  }
}
