import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

interface Platillo {
  nombre: string; // Nombre del platillo
  descripcion: string; // Descripción del platillo

  imagen: string; // URL de la imagen del platillo
  precio: number; // Precio del platillo
  precio2?: number; // Precio del platillo
  etiqueta?: string; // Etiqueta (opcional)
  descripcion2?: string;
}

@Component({
  selector: 'app-ensaldas',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, NavBarComponent],
  templateUrl: './ensaldas.component.html',
  styleUrl: './ensaldas.component.css',
})
export class EnsaldasComponent {
  platillos: Platillo[] = [
    {
      nombre: 'TEX-MEX',
      descripcion:
        'Mix de lechugas, queso, frituras de maiz, pico de gallo, pollo y aderezo de chipotle.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 149,
    },
    {
      nombre: 'GREEN FOREST',
      descripcion:
        'Mix de lechugas, queso, frituras de maíz, aguacate, pepino, pollo y aderezo de cilantro.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 145,
    },
    {
      nombre: 'CÉSAR',
      descripcion:
        'Mix de lechugas, parmesano, pollo, crutones y aderezo césar.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 139,
    },
    {
      nombre: 'MARIA LUISA',
      descripcion:
        'Mix de lechugas, tomate, queso, aguacate, fritura de maíz, pepino, pollo y aderezo ranch.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 145,
    },
    {
      nombre: 'MEDITERRANEA',
      descripcion:
        'Mix de  lechugas, pollo, pimiento rojo y amarillo, tomate, queso de cabra, fresa, nuez garapiñada, manzana y aderezo ranch.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 144,
      precio2: 159,
      descripcion2: 'Con camarón',
    },
    {
      nombre: 'CALIPSO',
      descripcion:
        'Mix de lechugas, pollo, pimiento rojo y amarillo, tomate, queso de cabra, fresa, nuez garapiñada, manzana y aderezo ranch.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 159,
    },
    {
      nombre: 'VERANO',
      descripcion:
        'Mix de lechugas, pollo, crutones, pimientos, queso de cabra, tomate, piña a la plancha, nuez garapiñada y aderezo de la casa.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 159,
    },

    // Agrega más platillos aquí
  ];

  platilloSeleccionado: Platillo | null = null;

  abrirModal(platillo: Platillo) {
    this.platilloSeleccionado = platillo;
    // Aquí puedes abrir el modal
  }
  cerrarModal() {
    this.platilloSeleccionado = null;
  }
}
