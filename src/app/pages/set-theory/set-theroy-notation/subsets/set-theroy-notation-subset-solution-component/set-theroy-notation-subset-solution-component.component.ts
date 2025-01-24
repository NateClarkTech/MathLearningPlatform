import { Component, OnInit, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MarkdownComponent } from 'ngx-markdown';
import { AuthService } from '../../../../../services/auth.service';
import { doc, setDoc } from '@angular/fire/firestore';
import { FirebaseApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore } from '@angular/fire/firestore';
import { SubsetProblem } from '../subset-problem.type';

@Component({
  selector: 'app-set-subset-solution-component',
  imports: [
    MatCardModule,
    MatButtonModule,
    MarkdownComponent,
    MatExpansionModule,
    MatButtonModule,
  ],
  templateUrl: './set-theroy-notation-subset-solution-component.component.html',
  styleUrl: './set-theroy-notation-subset-solution-component.component.scss'
})
export class SetTheroyNotationSubsetSolutionComponent implements OnInit {
  @Input() userAnswers: SubsetProblem[] = [];

  userScore = 0;
    understandingRank = "unknown";
    auth = inject(AuthService)
    Array = Array;
  
    constructor(private firebaseApp: FirebaseApp) {} // Inject FirebaseApp
  
    async ngOnInit() {
      const db = getFirestore(this.firebaseApp);
  
      for (let i = 0; i < this.userAnswers.length; i++) {
         if (this.validateAnswer(this.userAnswers[i].userAnswer, this.userAnswers[i].answer)){
            this.userScore++;
         }
      }
      if (this.userScore === this.userAnswers.length) {
           this.understandingRank = "Master";
         }
         else if (this.userAnswers.length * 0.8 <= this.userScore && this.userScore < this.userAnswers.length){
          this.understandingRank = "Intermediate";
         }
         else if (this.userAnswers.length * 0.6 <= this.userScore && this.userScore < this.userAnswers.length * 0.8){
          this.understandingRank = "Beginner";
         }
         else {
          this.understandingRank = "Need to review";
         }
        
         await setDoc(doc(db, "masteryRanking", "setTheory"), {
          userID: this.auth.getUser()()?.uid,
          mathField: "Set Theory",
          subtopic: "Subsets",
          userMasteryRank: this.understandingRank
        });
    }
  
    validateAnswer(userAnswer: boolean | null, correctAnswer: boolean): boolean {
      if (userAnswer === correctAnswer) {
        return true;
      } 
      else {
        return false;
      }
    }

    getElementsNotSubset(generatedSet: Set<number>, subset: Set<number>): number[] {  
      let elementsNotInMasterSet = [];
      for (let element of subset){
        if (!generatedSet.has(element)){
          elementsNotInMasterSet.push(element);
        }
      }
      return elementsNotInMasterSet
    }

    reloadCurrentPage() {
      window.location.reload();
    }
}
