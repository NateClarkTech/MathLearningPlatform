import { Component, OnInit, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MarkdownComponent } from 'ngx-markdown';
import { AuthService } from '../../../../../services/auth.service';
import { doc, setDoc } from '@angular/fire/firestore';
import { FirebaseApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore } from '@angular/fire/firestore';
import { SetMinusProblem } from '../set-minus-problem.type';

@Component({
  selector: 'app-set-operator-set-minus-solution-generator',
  imports: [
    MatCardModule,
    MatButtonModule,
    MarkdownComponent,
    MatExpansionModule,
    MatButtonModule,
  ],
  templateUrl: './set-operator-set-minus-solution-generator.component.html',
  styleUrl: './set-operator-set-minus-solution-generator.component.scss'
})
export class SetMinusSolutionGeneratorComponent {
  @Input() userAnswers: SetMinusProblem[] = [];

  userScore = 0;
  understandingRank = "unknown";
  auth = inject(AuthService)
  Array = Array;

  constructor(private firebaseApp: FirebaseApp) {} // Inject FirebaseApp

  async ngOnInit() {
    const db = getFirestore(this.firebaseApp);

    for (let i = 0; i < this.userAnswers.length; i++) {
      if (this.validateAnswer(this.userAnswers[i].userAnswer, this.userAnswers[i].answer)) {
        this.userScore++;
      }
    }

    if (this.userScore === this.userAnswers.length) {
      this.understandingRank = "Master";
    } else if (this.userAnswers.length * 0.8 <= this.userScore && this.userScore < this.userAnswers.length) {
      this.understandingRank = "Intermediate";
    } else if (this.userAnswers.length * 0.6 <= this.userScore && this.userScore < this.userAnswers.length * 0.8) {
      this.understandingRank = "Beginner";
    } else {
      this.understandingRank = "Need to review";
    }

    await setDoc(doc(db, "masteryRanking", "setTheory"), {
      userID: this.auth.getUser()()?.uid,
      mathField: "Set Theory",
      subtopic: "Subsets",
      userMasteryRank: this.understandingRank
    });
  }

  getSetMinus(setA: Set<any>, setB: Set<any>): Set<any> {
    return new Set([...setA].filter(x => !setB.has(x)));
  }

  validateAnswer(userAnswer: string[] | null, correctAnswer: Set<any>): boolean {
    if (userAnswer && userAnswer.length === correctAnswer.size){
      let answerSet = new Set(userAnswer);
      return this.eqSet(answerSet, correctAnswer);
    }
    else {
      return false;
    }
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  private eqSet = <T>(xs: Set<T>, ys: Set<T>): boolean => {
    const areSameSize = xs.size === ys.size;
    if (!areSameSize) {
      return false;
    }
  
    const allElementsMatch = [...xs].every((x) => ys.has(x));
    return allElementsMatch;
  };
}
