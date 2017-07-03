import { Component } from '@angular/core';

@Component({
    selector: 'app-contact-welcome',
    templateUrl: './contact-welcome.component.html'
})

export class ContactWelcomeComponent {
    constructor() {
        console.log('[ContactWelcomeComponent] - Initializing');
    }
}