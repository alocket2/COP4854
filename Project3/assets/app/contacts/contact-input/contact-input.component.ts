import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Contact } from '../model/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
    selector: 'app-contact-input',
    templateUrl: './contact-input.component.html',
    providers: [ ContactService ]
})

export class ContactInputComponent {
    constructor(private contactService: ContactService) {
        console.log('[ContactInputComponent] - Initializing');
    }
    
    onSubmit(form: NgForm) {
        let contact = this.createContactFromForm(form);
        this.contactService.addContact(contact)
            .subscribe(
                // data => console.log(data),
                // error => console.log(error)
            );
        form.resetForm;
    }

    private createContactFromForm(form: NgForm) {
        let first = form.control.controls.firstname.value;
        let last = form.control.controls.lastname.value;
        let email = form.control.controls.email.value;
        let phone = form.control.controls.phone.value;
        let address = form.control.controls.address.value;
        let twitter = form.control.controls.twitter.value;

        return new Contact(first, last, email, phone, address, twitter);
    }
}