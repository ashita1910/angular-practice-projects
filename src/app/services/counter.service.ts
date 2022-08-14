import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveActions: number = 0;
  inactiveToactiveActions: number = 0;

  constructor() { }

  increaseActiveToInactiveActions () {
    this.activeToInactiveActions++;
  }

  increaseInactiveToactiveActions () {
    this.inactiveToactiveActions++;
  }
}
