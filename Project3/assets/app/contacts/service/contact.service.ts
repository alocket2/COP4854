import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Contact } from '../model/contact.model';

@Injectable()
export class ContactService {

    private contacts: Contact[] = [];

    constructor(private http: Http) {
        console.log('[ContactService] - Instantiated');
    }

    addContact(contact: Contact) {
        console.log('[ContactService] - Saving Contact');
        this.contacts.push(contact);
        const body = JSON.stringify(contact);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/api/contacts', body, options)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) =>
                Observable.throw(error)
            );
    }

    getContacts() {
        console.log('[ContactService] - Retrieving Contacts');
        return this.http.get('http://localhost:3000/api/contacts')
            .map((response: Response) => {
                let contacts = response.json().obj;
                console.log('[ContactService] - Contact: ' + contacts[0].firstname);
                let transfomedContacts: Contact[] = [];
                for (let contact of contacts) {
                    transfomedContacts.push(new Contact(
                        contact.firstname,
                        contact.lastname,
                        contact.email,
                        contact.phone,
                        contact.address,
                        contact.twitter,
                        contact.id,
                        'Dummy',
                        null
                    ));
                }
                this.contacts = transfomedContacts;
                console.log('[ContactService] - Contact Transformed: ' + contacts[0].firstname);
                return this.contacts;
            })
            .catch((error: any) => Observable.throw(error));
    }

}