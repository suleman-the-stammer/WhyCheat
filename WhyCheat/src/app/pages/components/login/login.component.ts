import { Component,inject } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  SideImg:string = 'login-side-img.jpg'


  loginData: any = {
    email: '',
    password: ''
  };

  private router = inject(Router);

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.onLogin(this.loginData).subscribe(
      (res: any) => {
        console.log('Login Response:', res);

        if (res) {
          localStorage.setItem('user', JSON.stringify(res.email));
          console.log('User logged in and data saved:', res.email);
          this.router.navigate(['home']); 
        } else {
          console.error('Login failed:', res.message);
        }
      },
      (err) => {
        console.error('Error during login:', err);
      }
    );
  }
}
