import { Component } from '@angular/core';

import { Contact } from './contacts/model/contact.model';
import { ContactService } from './contacts/service/contact.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ ContactService ]
})

export class AppComponent {
    selectedContact: Contact;
} 