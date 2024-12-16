import { Component,inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
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
private router = inject(Router);
onSubmit(){


  this.userservice.onSignup(this.userData).subscribe((res:any)=>{
    console.log(res)
    if (res) {
      localStorage.setItem('user', JSON.stringify(res));
      console.log('User data saved in localStorage:', res.user);
      this.router.navigate(['login']);
    } else {
      console.error('Signup failed:', res.message);
    }
  });
}
}
