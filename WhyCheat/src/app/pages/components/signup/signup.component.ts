import { Component,inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { NgToastService } from 'ng-angular-popup';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
SideImg:string='signup-side-img.jpg'
// userService = inject(UserService)
userData:any={
  "userName":"",
  "email":"",
  "password":"",
  "role":""
  
  
  
}

constructor(private userservice: UserService,private toast:NgToastService) {}
private router = inject(Router);
isSubmitted: boolean = false;
onSubmit(signupForm:any){
  this.isSubmitted = true;
console.log(this.userData.role)
if (signupForm.invalid) {
  this.toast.warning('Invalidation Error', 'Please fill all fields correctly', 3000);
  return;
}
  this.userservice.onSignup(this.userData).subscribe((res:any)=>{
    console.log(res)
    if (res) {
      this.toast.success(res.meassage,'User Created Successfuly',4000)
     
      this.router.navigate(['login']);
    } else {
      console.error('Signup failed:', res.message);

    }
  },
  (err) => {
    console.error('Error during sign up:', err);
    this.toast.danger(err.status,'Sign up Faild',5000)
  });
}
}
