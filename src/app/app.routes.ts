//Page Componets
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SetTheroyNotationProblemPageComponent } from './pages/set-theroy-notation-problem-page/set-theroy-notation-problem-page.component';
import { ProblemsPageComponent } from './pages/problems-page/problems-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

//Router
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', redirectTo: '' },
    { path: 'problems', component: ProblemsPageComponent, },
    { path: 'problems/set-theory-problems', component: SetTheroyNotationProblemPageComponent },
    { path: '**', component: PageNotFoundComponent }
];
