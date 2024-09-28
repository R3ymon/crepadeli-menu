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
  selector: 'app-hamburguesas',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, NavBarComponent],
  templateUrl: './hamburguesas.component.html',
  styleUrl: './hamburguesas.component.css',
})
export class HamburguesasComponent {
  platillos: Platillo[] = [
    {
      nombre: 'CLÁSICA',
      descripcion:
        '240gr de carne de res, queso, lechuga, tomate, cebolla y aguacate.',

      imagen: '/assets/images/images/hamburger/clasica.webp',
      precio: 110,
    },
    {
      nombre: 'ITALIANA',
      descripcion:
        '240gr de carne de res, queso, pepperoni, salami, tomate, cebolla y lechuga.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 119,
    },
    {
      nombre: 'HAWAIANA',
      descripcion:
        '240gr de carne de res, queso, piña, jamón, tomate, cebolla y lechuga.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 119,
    },
    {
      nombre: 'POLLO',
      descripcion:
        '120gr de pollo a la plancha, queso, lechuga, tomate, y cebolla.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 119,
    },
    {
      nombre: 'POLLO BUFFALO',
      descripcion:
        '120gr de pollo a la plancha, queso, lechuga, tomate, cebolla y aderezo buffalo.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 139,
    },
    {
      nombre: 'POLLO BBQ',
      descripcion:
        '120gr de pollo a la plancha, queso, lechuga, tomate, cebolla y aderezo BBQ.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 139,
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
