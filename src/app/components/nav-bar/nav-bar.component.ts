import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = scrollTop > 50;
  }
}
