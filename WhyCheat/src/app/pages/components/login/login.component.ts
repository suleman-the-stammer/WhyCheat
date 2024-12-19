import { Component,inject } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  SideImg:string = 'login-side-img.jpg'


  loginData: any = {
    email: '',
    password: ''
  };

  isSubmitted: boolean = false;

  private router = inject(Router);

  constructor(private userService: UserService,private toast:NgToastService) {}

  onSubmit(loginForm: any) {
    this.isSubmitted = true;

    if (loginForm.invalid) {
      this.toast.warning('Invalidation Error', 'Please fill all fields correctly', 3000);
      return;
    }
    this.userService.onLogin(this.loginData).subscribe(
      (res: any) => {
        console.log('Login Response:', res);
        
        if (res) {
          this.toast.success(res.message,'Successfuly Login',5000)
          localStorage.setItem('token',res?.Token);
          console.log('User logged in and data saved:', res);
          this.router.navigate(['home']); 
        } else {
          console.error('Login failed:', res.message);
          this.toast.danger(res.message,'Login Faild',5000)
        }
      },
      (err) => {
        console.error('Error during login:', err);
        this.toast.danger(err.status,'Login Faild',5000)
      }
    );
  }
}
