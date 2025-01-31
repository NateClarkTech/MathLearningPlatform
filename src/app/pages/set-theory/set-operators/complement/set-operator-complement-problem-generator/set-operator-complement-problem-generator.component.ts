import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent } from 'ngx-markdown';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { user } from '@angular/fire/auth';
import { ComplementProblem } from '../complement-problem.type';

@Component({
  selector: 'app-set-operator-complement-problem-generator',
  imports: [
    MatCardModule,
    MatInputModule,
    MarkdownComponent,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './set-operator-complement-problem-generator.component.html',
  styleUrl: './set-operator-complement-problem-generator.component.scss'
})
export class SetOperatorComplementProblemGeneratorComponent {
  @Output() answerSender = new EventEmitter<ComplementProblem[]>();
  generatedProblems: ComplementProblem[] = [];

  Array = Array; // Expose Array to the template
  document = document;
  userAnswers: string[] = []; // To store user inputs

  constructor() {
    this.generatedProblems = [];
    for (let i = 0; i < 10; i++) {
      this.generatedProblems.push(this.generateMembershipProblem());
    }
  }

  private generateMembershipProblem(): ComplementProblem {
    let setA = new Set<string>();
    let setB = new Set<string>();
    let universalSet = new Set<string>();
    let aComplement = Math.random() < 0.5;
    let bComplement = Math.random() < 0.5;
    let type = ((Math.random() < 0.5) ? "complement-union" : "complement-intersect");
    let setAOperatorB = new Set<string>();
    let setASize = Math.floor(Math.random() * 7) + 1;
    let setBSize = Math.floor(Math.random() * 7) + 1;
    
    for (let i = 0; i < setASize; i++) {
      setA.add(Math.floor(Math.random() * 10 + 1).toString());
    }
    for (let i = 0; i < setBSize; i++) {
      setB.add(Math.floor(Math.random() * 10 + 1).toString());
    }
    for (let i = 1; i <= 10; i++) {
      universalSet.add(i.toString());
    }

    console.log(type);
      if (type === "complement-intersect") {
        if (aComplement) {
          // A^c ⋂ B^c
          if (bComplement) {
            setAOperatorB = new Set([...universalSet].filter(x => !setA.has(x) && !setB.has(x)));
          }
          // A^c ⋂ B
          else {
            setAOperatorB = new Set([...universalSet].filter(x => !setA.has(x) && setB.has(x)));
          }
        }
        // A ⋂ B^c
        else if (bComplement) {
          setAOperatorB = new Set([...universalSet].filter(x => setA.has(x) && !setB.has(x)));
        }
        // A ⋂ B
        else {
          setAOperatorB = new Set([...setA].filter(x => setB.has(x)));
        }
      }
      else if (type === "complement-union") {
        if (aComplement) {
          // A^c U B^c
          if (bComplement) {
            setAOperatorB = new Set([...universalSet].filter(x => !setA.has(x) || !setB.has(x))); // FIXED
          }
          // A^c U B
          else {
            setAOperatorB = new Set([...universalSet].filter(x => !setA.has(x) || setB.has(x)));
          }
        }
        // A U B^c
        else if (bComplement) {
          setAOperatorB = new Set([...universalSet].filter(x => setA.has(x) || !setB.has(x)));
        }
        // A U B
        else {
          setAOperatorB = new Set([...setA, ...setB]);
        }
      }
    return { setA: setA, setB: setB, aComplement: aComplement, bComplement: bComplement, type: type, answer: setAOperatorB, userAnswer: null };
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
