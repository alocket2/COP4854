import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../model/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html'
})

export class ContactListComponent implements OnInit {
    contacts: Contact[];
    @Input() selected: Contact;
    @Output() selectedChange: EventEmitter<Contact> = new EventEmitter();

    constructor(private router: Router, private contactService: ContactService) {
        console.log('[ContactListComponent] - Initializing');
    }

    ngOnInit() {
        this.getContacts();
        console.log(this.contacts);
    }

    private getContacts(): void {
        this.contactService.getContacts()
            .subscribe((contacts: Contact[]) => {
                this.contacts = contacts;
            });
    }
}