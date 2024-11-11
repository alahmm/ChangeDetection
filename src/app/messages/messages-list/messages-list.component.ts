import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MessagesService} from "../messages.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe
  ]
})
export class MessagesListComponent {
  private messagesService = inject(MessagesService);
  messages$ = this.messagesService.messages$;

 // messages = this.messagesService.allMessages; //the signal will be stored in that property, when not using signal use getter
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

}
