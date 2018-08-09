// contact interface

import {Message} from './message';

export class Contact {
  id: number;
  name: string;
  image: string;
  isOnline: boolean;
  messages: message[];
}
