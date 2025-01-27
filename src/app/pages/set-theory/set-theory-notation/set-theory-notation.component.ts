import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';

interface ProblemNode {
  name: string;
  routerLink?: string;
  children?: ProblemNode[];
}

const TREE_DATA: ProblemNode[] = [
  {
    name: 'Set Theory Notation',
    children: [
      {name: 'Set Membership', routerLink:"membership",},
      {name: 'Subsets', routerLink:"subsets",},
    ]
  },
];

@Component({
  selector: 'app-set-theory',
  imports: [
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    CommonModule,
    MarkdownModule,
    RouterLink
  ],
  templateUrl: './set-theory-notation.component.html',
  styleUrl: './set-theory-notation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetTheoryNotationComponent {

  childrenAccessor = (node: ProblemNode) => node.children ?? [];

  dataSource = TREE_DATA;

  hasChild = (_: number, node: ProblemNode) => !!node.children && node.children.length > 0;

  onLoad($event : any){
    console.log($event);
  }

  onError($event : any){
    console.log($event);
  }

}
