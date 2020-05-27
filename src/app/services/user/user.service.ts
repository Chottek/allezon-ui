import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})


export class UserService {


  constructor(private http: HttpClient) {}

  getUserById(id: number){
    return this.http.get('/server/api/users/get?id=' + id);
  }

  getAllUsers() {
      return this.http.get('/server/api/users');
  }

  registerUser(user){
    return this.http.post('/server/api/users', user, httpOptions);
  }

  loginUser(data) {
    return this.http.post('/server/api/users/login', data, httpOptions);
  }

  removeUser(id: number){
    const url = '/server/api/users/' + id;
    return this.http.delete(url).toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }


}
