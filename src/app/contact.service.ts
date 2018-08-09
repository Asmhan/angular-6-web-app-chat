import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContacts(): Observable<Contact[]> {
    // return array of contacts
    return of(CONTACTS);
  }
}
