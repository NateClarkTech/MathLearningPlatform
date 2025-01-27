import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent } from 'ngx-markdown';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { UnionProblem } from '../union-problem.type';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-set-operator-union-problem-generator',
  imports: [
    MatCardModule,
    MatInputModule,
    MarkdownComponent,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './set-operator-union-problem-generator.component.html',
  styleUrl: './set-operator-union-problem-generator.component.scss'
})
export class SetOperatorUnionProblemGeneratorComponent {
  @Output() answerSender = new EventEmitter<UnionProblem[]>();
  generatedProblems: UnionProblem[] = [];

  Array = Array; // Expose Array to the template
  document = document;
  userAnswers: string[] = []; // To store user inputs

  constructor() {
    this.generatedProblems = [];
    for (let i = 0; i < 10; i++) {
      this.generatedProblems.push(this.generateMembershipProblem());
    }
  }

  private generateMembershipProblem(): UnionProblem {
    let setA = new Set<string>();
    let setB = new Set<string>();
    let type = "union";
    let setAUnionB = new Set<string>();
    let setASize = Math.floor(Math.random() * 5) + 1;
    let setBSize = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < setASize; i++) {
      setA.add(Math.floor(Math.random() * 15 + 1).toString());
    }
    for (let i = 0; i < setBSize; i++) {
      setB.add(Math.floor(Math.random() * 15 + 1).toString());
    }

    setAUnionB = new Set([...setA, ...setB]);

    return { setA: setA, setB: setB, type: type, answer: setAUnionB, userAnswer: null };
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
