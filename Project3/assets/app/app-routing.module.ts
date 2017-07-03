import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactInputComponent } from './contacts/contact-input/contact-input.component';

import { AUTH_ROUTES } from './auth/auth.routes';

const routes: Routes = [
    { path: 'contact/add', component: ContactInputComponent },
    { path: 'contact/:id', component: ContactDetailComponent },
    { path: 'contact/edit/:id', component: ContactEditComponent },
    { path: 'auth', component: AuthComponent, children: AUTH_ROUTES }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}