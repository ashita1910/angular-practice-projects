import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers = ["Phoebe", "Monica", "Ross"];
  inactiveUsers = ["Rachel", "Chandler", "Joey"];

  constructor(private counterService: CounterService) { }

  addActiveUSer(username: string) {
    this.counterService.increaseInactiveToactiveActions();
    this.activeUsers.push(username);
    let index: any;
    this.inactiveUsers.map((user) => {
      if(user == username) {
        index = this.inactiveUsers.indexOf(user);
      }
    });
    this.inactiveUsers.splice(index , 1);
  }

  addInactiveUSer(username: string) {
    this.counterService.increaseActiveToInactiveActions();
    this.inactiveUsers.push(username);
    let index: any;
    this.activeUsers.map((user) => {
      if(user == username) {
        index = this.activeUsers.indexOf(user);
      }
    });
    this.activeUsers.splice(index , 1);
  }
}
