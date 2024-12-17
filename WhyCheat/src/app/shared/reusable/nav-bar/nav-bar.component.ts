import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,NzDropDownModule, NzIconModule,MatIconModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})

export class NavBarComponent {
  showNavbar: boolean = true;
  private excludedRoutes = ['/login', '/signup', '/dashboard','/dashboard/quizupload','/dashboard/profile','/dashboard/stats','/dashboard/quizupload/uploadquizform'];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       
        this.showNavbar = !this.excludedRoutes.includes(event.url);
      }
    });
  }

}
