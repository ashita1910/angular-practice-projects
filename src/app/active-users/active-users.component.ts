import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: string[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  setToInactive(username: string) {
    this.userService.addInactiveUSer(username);
  }

}
