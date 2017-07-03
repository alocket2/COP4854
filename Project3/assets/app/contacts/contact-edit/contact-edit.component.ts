import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


import { Contact } from '../model/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
    selector: 'app-contact-edit',
    templateUrl: 'contact-edit.component.html'
})

export class ContactEditComponent implements OnInit {
    contact: Contact;
    form;

    constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) {
        console.log('[ContactEditComponent] - Initializing');
    }

    ngOnInit() {
        console.log('[ContactEditComponent] - ngOnInit invoked');
        // this.contact = this.contactService.getContact(this.route.snapshot.params.id);
      


        // this.form = new FormGroup({
        //         firstname: new FormControl(this.contact.firstName),
        //         lastname: new FormControl(this.contact.lastName),
        //         email: new FormControl(this.contact.email),
        //         phone: new FormControl(this.contact.mobile),
        //         address: new FormControl(this.contact.address),
        //         twitter: new FormControl(this.contact.twitter)
        //     });
    }

    onSubmit(value) {
        // Update contact here
    } 
}