//Page Componets
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProblemsPageComponent } from './pages/problems-page/problems-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SetTheoryComponent } from './pages/set-theory/set-theory.component';
import { SetTheoryNotationComponent } from './pages/set-theory/set-theory-notation/set-theory-notation.component';
import { SetTheorySetMembershipComponent } from './pages/set-theory/set-theory-notation/set-membership/set-theory-notation.component';
import { SetTheoryNotationSubsetComponent } from './pages/set-theory/set-theory-notation/subsets/set-theory-notation-subset.component';

//Router
import { Routes, CanActivate} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

//Route Guard
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', redirectTo: '' },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'problems', component: ProblemsPageComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory', component: SetTheoryComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory/notation', component: SetTheoryNotationComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory/notation/subsets', component: SetTheoryNotationSubsetComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory/notation/membership', component: SetTheorySetMembershipComponent, canActivate: [AuthGuard]},
    { path: '**', component: PageNotFoundComponent }
];
