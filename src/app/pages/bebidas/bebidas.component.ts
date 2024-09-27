import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  standalone: true,
  imports: [NavBarComponent, RouterLinkWithHref],
  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css',
})
export class BebidasComponent {}
