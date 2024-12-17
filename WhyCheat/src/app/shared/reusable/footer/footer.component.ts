import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
