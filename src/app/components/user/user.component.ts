import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    document.getElementById('users').setAttribute('style', 'background-color: blue;');
    this.getAllUsers();
  }

  parseRole(role){
    switch (role){
      case 0: return 'USER';
      case 1: return 'MODERATOR';
      case 2: return 'ADMIN';
    }
  }

  getAllUsers() {
    return this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('Successfuly got');
      }
    );
  }

}
