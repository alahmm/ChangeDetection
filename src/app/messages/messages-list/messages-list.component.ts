import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit{
  private messagesService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef); //to detect the changement for showing saved messages

  messages: string[] = [];
 // messages = this.messagesService.allMessages; //the signal will be stored in that property, when not using signal use getter
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
  ngOnInit() {
    this.messagesService.messages$.subscribe((messages) => {
      this.messages = messages;
      this.cdRef.markForCheck();//subscribe to events emitted from the service, that will be executed by rxjs
    });
  }
}
