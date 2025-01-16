import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-set-theroy-notation',
  imports: [
    MatTabsModule,
    MarkdownComponent
  ],
  templateUrl: './set-theroy-notation.component.html',
  styleUrl: './set-theroy-notation.component.scss'
})
export class SetTheroyNotationComponent {

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }
  
}
