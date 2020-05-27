import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validMessage = '';
  registerMessage = '';

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

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

      const login = {
        user: this.loginForm.value.email,
        password: this.loginForm.value.password
      };



      this.userService.loginUser(login).subscribe(
        (res: HttpResponse <any>) => {
          window.location.reload();
          alert('elo');
          },
        (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occured: ', err.error.message);
        }
        else {
          console.log('Backend returned code', err.status, 'body was ', err.error);
        }
      });
    }
    else{
      this.validMessage = 'Please fill the form before submitting!';
    }
  }

  httpCall(method: string, url: string, data: any, callback: (result: any) => any) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (callback) { xhr.onload = function() { callback(JSON.parse(this.responseText)); }; }
    if (data != null) {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    }
    else { xhr.send(); }
  }

}
