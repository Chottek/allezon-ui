import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validMessage = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    document.getElementById('login').setAttribute('style', 'background-color: blue;');
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
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
