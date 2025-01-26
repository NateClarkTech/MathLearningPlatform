import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ProblemNode {
  name: string;
  routerLink?: string;
  children?: ProblemNode[];
}

const TREE_DATA: ProblemNode[] = [
  {
    name: 'Set Theory',
    routerLink: 'set-theory',
    children: [
      {
        name: 'Notation',
        routerLink:"set-theory/notation",
        children: [
          {name: 'Set Membership', routerLink:"set-theory/notation/membership",},
          {name: 'Subsets', routerLink:"set-theory/notation/subsets",},
        ]
      }, 
    ]
  },
];

@Component({
  selector: 'app-problems-page',
  imports: [
    CommonModule,
    RouterLink,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,

  ],
  templateUrl: './problems-page.component.html',
  styleUrl: './problems-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemsPageComponent {
  childrenAccessor = (node: ProblemNode) => node.children ?? [];
  dataSource = TREE_DATA;

  hasChild = (_: number, node: ProblemNode) => !!node.children && node.children.length > 0;


}
