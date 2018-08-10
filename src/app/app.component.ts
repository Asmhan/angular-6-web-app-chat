import { Component } from '@angular/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedContact: Contact;
  contacts: Contact[];
  defaultSelectedContact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
    this.defaultSelectedContact = this.contacts[0]
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    this.contactService.onSelectContact(contact);
  }

  getContacts(): void {
    this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
  }
}
