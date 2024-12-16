import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,NzDropDownModule, NzIconModule,MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
