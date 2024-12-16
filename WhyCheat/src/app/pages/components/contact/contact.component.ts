import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../../shared/reusable/hero-section/hero-section.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  heroImage = 'signup-side-img.jpg';
  heroTitle = 'Welcome to the Contact Page';
  heroSubtitle = 'Discover amazing content!';
}
