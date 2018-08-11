import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Contact } from './contact';
import {Message} from './Message';

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
    // get index of contact and find this contact data and save in contactData variable
    let indexOfContact = this.contacts.indexOf(contact);
    let contactData = this.contacts[indexOfContact];
    // delete contact element from contacts array
    this.contacts.splice(indexOfContact, 1);
    // after 500 ms add on the 0 index of contacts array
    setTimeout(()=>{this.contacts.unshift(contactData)}, 700);
  }

  onReceiveNewMessage(indexOfContact: number, message: Message){
    let contactData = this.contacts[indexOfContact];
    this.contacts.splice(indexOfContact, 1);
    contactData.messages.push(message);
    contactData.lastMessage = message;

    setTimeout(()=>{
      this.contacts.unshift(contactData);
    }, 700)
  }
}
