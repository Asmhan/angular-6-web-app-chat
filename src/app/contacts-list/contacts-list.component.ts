import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent{
  @Input() contacts: Contact[];
  @Input() selectedContact: Contact;
  @Output() onSelect = new EventEmitter();

  onSelected(contact: Contact): void {
    this.onSelect.emit(contact);
  }

}
