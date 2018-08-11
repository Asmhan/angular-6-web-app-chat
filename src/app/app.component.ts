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
  isSmsTabActive: boolean = true;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
    this.defaultSelectedContact = this.contacts[0];
    // this.defaultSelectedContact.messages.push(...this.defaultSelectedContact.messages)
    // this.defaultSelectedContact.messages.push(...this.defaultSelectedContact.messages)
    setInterval(()=> {
      this.contactService.onReceiveNewMessage(3, {
        id: 1415,
        text: 'Made any progress so far?',
        date: '12:28 AM',
        isFirstMessageInGroup: true,
        isLastMessageInGroup: true,
        isSender: true,
        isOpened: false,
      })
    }, 30000);
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    this.contactService.onSelectContact(contact);
    this.isSmsTabActive = false;
  }
  onClickSmsIcon(){
    this.isSmsTabActive = true;
  }
  getContacts(): void {
    this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
  }
}
