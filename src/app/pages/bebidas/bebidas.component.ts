import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bebidas',
  standalone: true,
  imports: [NavBarComponent, RouterLinkWithHref, CommonModule],
  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css',
})
export class BebidasComponent {
  images: string[] = [
    '/assets/images/images/bebidas/fresa.webp',
    '/assets/images/images/bebidas/mango.webp',
    '/assets/images/images/bebidas/bebida.webp',
    '/assets/images/images/bebidas/bebidas2.webp',
    '/assets/images/images/bebidas/coco.webp',
    '/assets/images/images/bebidas/smoothie.webp',

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
