import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ContactItemComponent } from './contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ChatBoxComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
