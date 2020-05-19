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
        data => {
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

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  submitForm() {
    // const name1 = (document.getElementById('name') as HTMLInputElement).value;
    // const surname1 = (document.getElementById('surname') as HTMLInputElement).value;
    // const username1 = (document.getElementById('username') as HTMLInputElement).value;
    // const email1 = (document.getElementById('email') as HTMLInputElement).value;
    // const password1 = (document.getElementById('passwd') as HTMLInputElement).value;
    // const password2 = (document.getElementById('passwd1') as HTMLInputElement).value;
    // const birthdate1 = (document.getElementById('birthdate') as HTMLInputElement).value;
    //
    // if (password2 !== password1) {
    //   return alert('Passwords are not equal!');
    // }
    //
    // const u = {
    //   name: name1,
    //   surname: surname1,
    //   username: username1,
    //   email: email1,
    //   password: password1,
    //   birthdate: birthdate1
    // };
    //
    // return this.userService.registerUser(u).subscribe(
    //   data => {
    //     return false;
    //   },
    //   error => {
    //     return Observable.throw(error);
    //   },
    // () => alert('done!')
    // );
  }


}
