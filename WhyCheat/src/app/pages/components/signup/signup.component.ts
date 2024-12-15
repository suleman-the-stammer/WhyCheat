import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
SideImg:string='signup-side-img.jpg'
// userService = inject(UserService)
userData:any={
  "userName":"",
  "email":"",
  "password":""
  
  
  
}
constructor(private userservice: UserService) {}

onSubmit(){
  this.userservice.onSignup(this.userData).subscribe((res:any)=>{
    console.log(res)
  })
}
}
