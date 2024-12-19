import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./shared/reusable/nav-bar/nav-bar.component";
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FooterComponent } from "./shared/reusable/footer/footer.component";
import { NgToastModule } from 'ng-angular-popup';
import { ToasterPosition } from './core/enums/toaster-position';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgToastModule,RouterOutlet, FormsModule, NavBarComponent, NzDropDownModule, NzMenuModule, NzIconModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WhyCheat';
  ToasterPosition = ToasterPosition;

}
