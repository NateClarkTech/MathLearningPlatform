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
    name: 'Set Theory Operators',
    children: [
      {name: 'Union', routerLink:"union",},
      {name: 'Intersection', routerLink:"intersection",},
      {name: 'Disjoint', routerLink:"disjoint",},
      {name: 'Complement', routerLink:"complement",},
    ]
  },
];


@Component({
  selector: 'app-set-operators',
  imports: [
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    CommonModule,
    MarkdownModule,
    RouterLink
  ],
  templateUrl: './set-operators.component.html',
  styleUrl: './set-operators.component.scss'
})
export class SetOperatorsComponent {
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
