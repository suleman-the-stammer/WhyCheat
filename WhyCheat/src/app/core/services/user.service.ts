import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  onSignup(obj:any){
  return this.http.post("http://localhost:3000/api/users/createUser",obj);
  }

  onLogin(obj: any) {
    return this.http.post('http://localhost:3000/api/users/loginUser', obj);
  }
}
