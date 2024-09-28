import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-hamburger',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.css',
})
export class HamburgerComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
