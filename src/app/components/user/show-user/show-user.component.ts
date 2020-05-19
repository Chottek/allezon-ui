import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.param = params.id;
    });
  }

  public user;
  public param;

  ngOnInit(): void {
    this.getUserById(this.param);
  }

  removeUser(id: number){
    return this.userService.removeUser(id);
  }

  parseRole(role){
    switch (role){
      case 0: return 'USER';
      case 1: return 'MODERATOR';
      case 2: return 'ADMIN';
    }
  }

  getUserById(id){
    return this.userService.getUserById(id).subscribe(
      data => {
        this.user = data;
      },
      err => console.error(err),
      () => console.log('loaded')
    );
  }
}
