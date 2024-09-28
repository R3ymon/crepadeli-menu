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
  selector: 'app-pastas',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, NavBarComponent],
  templateUrl: './pastas.component.html',
  styleUrl: './pastas.component.css',
})
export class PastasComponent {
  platillos: Platillo[] = [
    {
      nombre: 'BURRO',
      descripcion: 'Spaguetti sazonado, salteado con mantequilla.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 85,
    },
    {
      nombre: 'ARRABIATA',
      descripcion: 'Spaguetti con salsa de tomate, tocino y chile de árbol.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 120,
    },
    {
      nombre: 'BOLOGNESA',
      descripcion: 'Spaguetti con salsa de carne molida y tomate.',

      imagen: '/assets/images/images/pastas/bolognesa.webp',
      precio: 150,
    },
    {
      nombre: 'LASAÑA',
      descripcion: '',

      imagen: '/assets/images/images/pastas/lasagna.webp',
      precio: 160,
    },
    {
      nombre: 'ALFREDO',
      descripcion:
        'Spaguetti, crema sazonada, tocino, tomate. pollo y albahaca.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 145,
    },
    {
      nombre: 'ALFREDO CAMARÓN',
      descripcion:
        'Spaguetti, crema sazonada, tocino, tomate, camaron y albahaca.',

      imagen: '/assets/images/images/pastas/alfredo.webp',
      precio: 160,
    },
    {
      nombre: 'CREPA DELI',
      descripcion: 'Spaguetti con champiñones, chile de árbol, tomate y tocino',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 120,
    },
    {
      nombre: 'PESTO',
      descripcion: 'Spaguetti sazonado, pollo y salsa pesto cremosa.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 155,
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
