import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-set-theory',
  imports: [
    MatButtonModule,
    MatTabsModule,
    RouterLink,
    MarkdownComponent
  ],
  templateUrl: './set-theory.component.html',
  styleUrl: './set-theory.component.scss'
})
export class SetTheoryComponent {

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

}
