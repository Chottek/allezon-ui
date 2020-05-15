import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) {}

  getAllUsers() {
     return this.http.get('/server/api/users');
  }

  registerUser(user){
    return this.http.post('/server/api/users', user, httpOptions);
  }


}
