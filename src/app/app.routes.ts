//Page Componets
import { HomePageComponent } from './home-page/home-page.component';
import { SetTheroyNotationProblemPageComponent } from './set-theroy-notation-problem-page/set-theroy-notation-problem-page.component';

//Router
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'set-theory-problems', component: SetTheroyNotationProblemPageComponent }
];
