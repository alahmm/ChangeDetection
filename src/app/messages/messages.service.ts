import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages$ = new BehaviorSubject<string[]>([]);//rxjs property
  private messages: string[] = [];

  get allMessages() {
    return [...this.messages];//return a copy of these messages
  }

  addMessage(message: string) {
    this.messages = [...this.messages, message];//copy the last messages and add to it this message
    this.messages$.next(this.messages);//emit a new event for the updated messages so we need a subscription to be notified about that
  }
}
