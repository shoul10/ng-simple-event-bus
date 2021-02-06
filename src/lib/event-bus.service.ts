import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private eventsHolder = {};

  on(eventName: string, callback: any): void {
    let events = this.eventsHolder[eventName];
    if (!events) {
      events = [];
    }
    events.push(callback);
    this.eventsHolder[eventName] = events;
  }

  off(eventName: string, callback: any): void {
    let events = this.eventsHolder[eventName];
    if (!events) {
      events = [];
    }
    const index = events.indexOf(callback);
    if (index === -1) { return; }
    events.splice(index, 1);
  }

  trigger<T>(eventName: string, payload: T = null): void {
    const events = this.eventsHolder[eventName];
    if (events) {
      events.forEach((e: any) => {
        this.execute<T>(e, payload);
      });
    }
  }

  private execute<T>(action: any, payload: T): void {
    setTimeout(() => {
      action(payload);
    }, 0);
  }
}
