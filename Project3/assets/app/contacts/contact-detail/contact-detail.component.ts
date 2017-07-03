import { Component, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../model/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html'
})

export class ContactDetailComponent {
    @Input() contact: Contact;

    constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) {
        console.log('[ContactDetailComponent] - Initializing');
    }

    onEdit() {
        this.goToEditContact();
    }

    goBack() {
        this.router.navigate(['/']);
    }

    private goToEditContact() {
        console.log('[ContactDetailComponent] - goToEditContact invoked');
        this.router.navigate(['/contact/edit/']);
    }
}