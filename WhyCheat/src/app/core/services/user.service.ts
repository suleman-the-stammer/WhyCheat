import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private role: string = '';
  constructor(private http: HttpClient) { }



  setRole(role: string): void {
    console.log("SettingRole" , role);
    
    this.role = role;
  }

 
  getRole(): string {
    console.log("Current Role " , this.role);
    
    return this.role;
  }

  




  onSignup(obj: any) {
    return this.http.post("http://localhost:3000/api/users/createUser", obj);
  }

  onLogin(obj: any) {
    return this.http.post('http://localhost:3000/api/users/loginUser', obj);
  }

  onProfileDetails() {
    let Token = localStorage.getItem("token")
    return this.http.get("http://localhost:3000/api/users/profileDetails", { headers: { "authrization": `Bearer ${Token}` } });
  }

  onUpdateProfile(obj:any) {
    let Token = localStorage.getItem("token")
    return this.http.put("http://localhost:3000/api/users/updateUser", obj,  { headers: { "authrization": `Bearer ${Token}` } });
  }
  onStudentList() {
    let Token = localStorage.getItem("token")
    return this.http.get("http://localhost:3000/api/users/studentList", { headers: { "authrization": `Bearer ${Token}` } });
  }


}
