import { Component, OnInit, Input } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() selectedContact: Contact;
  @Input() isFirstChild: Boolean;
  constructor() { }

  ngOnInit() {
  }

  isSelectedContact (){
    return this.contact == this.selectedContact;
  }
}
