import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isContentVisible = false;

  ngOnInit(): void {
    // Activar la visibilidad del contenido después de que la página se cargue
    setTimeout(() => {
      this.isContentVisible = true;
    }, 400); // Retraso de 300ms para iniciar la transición
  }
}
