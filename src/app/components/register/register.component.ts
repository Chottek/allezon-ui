import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  validMessage = '';

  public user;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password1: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
    });
  }

  submitRegistration(){
    const passwd = this.userForm.controls.password.value;
    const passwd1 = this.userForm.controls.password1.value;

    if (passwd !== passwd1){
      this.userForm.reset();
      this.validMessage = 'Passwords are not equal!';
      return;
    }

    if (this.userForm.valid){
      this.userForm.removeControl('password1');
      this.userService.registerUser(this.userForm.value).subscribe(
        response => {
          alert(response.statusText);
          this.router.navigate(['/login'], { queryParams: { registered: true }});
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
