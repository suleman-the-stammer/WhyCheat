import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  role: string = '';
  constructor(private userservice: UserService) { }
  userData: any = {
    "userName": "",
    "email": "",




  }
  ngOnInit(): void {


    this.userservice.onProfileDetails().subscribe((res: any) => {

      if (res) {
        const userDoc = res.UserData._doc;

        this.role = userDoc.role; 
        localStorage.setItem("role" , userDoc.role)
        console.log(this.role)
        this.userservice.setRole(this.role);
    
        this.userData.userName = userDoc.userName;
        this.userData.email = userDoc.email;

        console.log(this.userData);
        console.log(res)
      } else {
        console.error('failed:', res.message);
      }
    });
  }

  onUpdate () {
    this.userservice.onUpdateProfile(this.userData).subscribe((res: any) => {

      if (res) {


        console.log(this.userData);
        console.log(res)
      } else {
        console.error('failed:', res.message);
      }
    });

  }



}
