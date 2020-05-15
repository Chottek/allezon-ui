import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {

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
