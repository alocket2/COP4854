import { Routes } from '@angular/router';

import { LogoutComponent } from './logout/logout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'logout', component: LogoutComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
];