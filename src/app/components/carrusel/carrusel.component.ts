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
    '/assets/images/bg-category/baguette.webp',
    '/assets/images/bg-category/hamburguer.webp',
    '/assets/images/bg-category/pizza.webp',
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
