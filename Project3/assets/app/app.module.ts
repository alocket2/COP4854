import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { AuthComponent } from './auth/auth.component';
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactWelcomeComponent } from './contacts/contact-welcome/contact-welcome.comonent';
import { ContactInputComponent } from './contacts/contact-input/contact-input.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

import { AppRoutingModule } from './app-routing.module';



@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        ContactDetailComponent,
        ContactEditComponent,
        ContactWelcomeComponent,
        ContactInputComponent,
        ContactListComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule,
        ReactiveFormsModule, 
        AppRoutingModule,
        HttpModule
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}