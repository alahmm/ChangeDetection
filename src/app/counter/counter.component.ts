import {Component, inject, NgZone, OnInit, signal} from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
})
export class CounterComponent implements OnInit {
  private zone = inject(NgZone);
  count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }

  ngOnInit() {
    setTimeout(() => {
      this.count.set(0);
    },4000);//set a timer for each 4 s

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Timer expired');// this code will not be shown by zonejs
      },5000);
    })
  }
}
