import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validMessage = '';
  registerMessage = '';

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkRegistration();
    document.getElementById('login').setAttribute('style', 'background-color: blue;');
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  checkRegistration(){
    if (this.route.snapshot.queryParams.registered === 'true'){
        this.registerMessage = 'Registered Successfuly! You can now log in';
    }
  }

  submitLogin(){
    if (this.loginForm.valid){
      this.userService.registerUser(this.loginForm.value).subscribe(
        data => {
          this.loginForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please fill the form before submitting!';
    }
  }

}
