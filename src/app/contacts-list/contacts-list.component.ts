import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Contact} from '../contact';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class ContactsListComponent{
  @Input() contacts: Contact[];
  @Input() selectedContact: Contact;
  @Output() onSelect = new EventEmitter();

  onSelected(contact: Contact): void {
    this.onSelect.emit(contact);
  }

}
