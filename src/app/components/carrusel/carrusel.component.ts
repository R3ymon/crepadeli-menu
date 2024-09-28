import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css',
})
export class CarruselComponent {
  images: string[] = [
    '/assets/images/carrusel/ensaladas2.webp',
    '/assets/images/carrusel/picresa.webp',
    '/assets/images/carrusel/ensaladapasta.webp',
    '/assets/images/carrusel/frapecrepa.webp',
    '/assets/images/carrusel/ensaladas1.webp',
    '/assets/images/carrusel/frapefresa.webp',
    '/assets/images/carrusel/sample.webp',
    // Añade más imágenes según sea necesario
  ];

  currentIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Limpiar el intervalo cuando se destruye el componente
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000); // Cambiar cada 3 segundos
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
