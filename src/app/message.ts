//Message interface

export class Message {
  id: number;
  text: string;
  date: string;
  isFirstMessageInGroup: boolean;
  isSender: boolean;
  isOpened: boolean;
}
