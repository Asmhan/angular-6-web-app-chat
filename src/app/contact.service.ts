import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = CONTACTS;
  getContacts(): Observable<Contact[]> {
    // return array of contacts
    return of(CONTACTS);
  }
  onSelectContact(contact: Contact){
    // get index of contact and find this contact data and save in contatData variable
    let indexOfContact = this.contacts.indexOf(contact);
    let contatData = this.contacts[indexOfContact];
    // delete contact element from contacts array
    this.contacts.splice(indexOfContact, 1);
    // after 500 ms add on the 0 index of contacts array
    setTimeout(()=>{this.contacts.unshift(contatData)}, 500);
  }
}
