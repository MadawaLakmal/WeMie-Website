import { Component } from '@angular/core';
import { ContactService } from "./contact.service";
import { FormBuilder , FormGroup ,Validators } from "@angular/forms";

@Component({
    selector:'contact',
    templateUrl:'./contact.component.html',
    providers:[ContactService]
})

export class ContactComponent {

    contactSaveResult = {};
    contactForm:FormGroup;
    successMessage = false;

    /**
     * constructor
     * create fb object and contact service
     *
     */
    constructor(
        private contactService:ContactService,
        private fb:FormBuilder
    ){
        this.createContactForm();
    }

    /**
     * create contact form
     */
    createContactForm() {
        this.contactForm  = this.fb.group({
            name:[null,[Validators.required,Validators.maxLength(10)]],
            email_address:[null,[Validators.required,Validators.email,Validators.maxLength(100)]],
            subject:[null,[Validators.required,Validators.maxLength(150)]],
            message:[null,[Validators.required,Validators.maxLength(255)]]
        });
    }

    /**
     * add contact by calling contact service
     */
    addContact(contactDetails) {
        this.contactService.addContactDetails(contactDetails).subscribe(data => {
            this.contactSaveResult = data;
            console.log(data);
            if (data) {
                this.successMessage = true;
                setTimeout(()=>{
                    this.contactForm.reset();
                    this.successMessage = false;
                },5000);

            }
        });
    }
}