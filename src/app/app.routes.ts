//Page Componets
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProblemsPageComponent } from './pages/problems-page/problems-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SetTheoryComponent } from './pages/set-theory/set-theory.component';
import { SetTheoryNotationComponent } from './pages/set-theory/set-theory-notation/set-theory-notation.component';
import { SetTheorySetMembershipComponent } from './pages/set-theory/set-theory-notation/set-membership/set-theory-notation.component';
import { SetTheoryNotationSubsetComponent } from './pages/set-theory/set-theory-notation/subsets/set-theory-notation-subset.component';
import { SetOperatorsComponent } from './pages/set-theory/set-operators/set-operators.component';
import { SetOperatorComplementComponent } from './pages/set-theory/set-operators/complement/set-operator-complement.component';
import { SetOperatorIntersectionComponent } from './pages/set-theory/set-operators/intersection/set-operator-intersection.component';
import { SetOperatorUnionComponent } from './pages/set-theory/set-operators/union/set-operator-union.component';
import { SetOperatorSetMinusComponent } from './pages/set-theory/set-operators/set-minus/set-operator-set-minus';
import { TheoremsComponent } from './pages/set-theory/theroms/theorems.component'
import { DemorganLawComponent } from './pages/set-theory/theroms/demorgan-law/demorgan-law.component';

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
    { path: 'problems/set-theory/operators', component: SetOperatorsComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory/operators/complement', component: SetOperatorComplementComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory/operators/set-minus', component: SetOperatorSetMinusComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory/operators/intersection', component: SetOperatorIntersectionComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory/operators/union', component: SetOperatorUnionComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory/theorems', component: TheoremsComponent, canActivate: [AuthGuard]},
    { path: 'problems/set-theory/theorems/demorgans-law', component: DemorganLawComponent, canActivate: [AuthGuard]},
    { path: '**', component: PageNotFoundComponent }
];
