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
  selector: 'app-beguettes',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, NavBarComponent],
  templateUrl: './beguettes.component.html',
  styleUrl: './beguettes.component.css',
})
export class BeguettesComponent {
  platillos: Platillo[] = [
    {
      nombre: 'BAGUETTE ARRACHERA',
      descripcion: 'Arrachera, queso, tomate, lechuga y aguacate.',

      imagen: '/assets/images/bg-category/baguette.webp',
      precio: 155,
    },
    {
      nombre: 'MEAT LOVERS',
      descripcion:
        'Tocino, jamón, salami, pepperoni, queso, lechuga y jitomate.',

      imagen: '/assets/images/bg-category/baguette.webp',
      precio: 145,
    },
    {
      nombre: 'SALAMI',
      descripcion: 'Queso, salami, tomate, pepinillos, lechuga y aceitunas.',

      imagen: '/assets/images/bg-category/baguette.webp',
      precio: 140,
    },
    {
      nombre: 'JAMÓN',
      descripcion: 'Queso, jamón, lechuga, tomate, aceitunas y pepinillos.',

      imagen: '/assets/images/bg-category/baguette.webp',
      precio: 140,
    },
    {
      nombre: 'VEGETARIANO',
      descripcion: 'Queso, lechuga, tomate, pepinillos, aceitunas y aguacate.',

      imagen: '/assets/images/bg-category/baguette.webp',
      precio: 99,
    },
    {
      nombre: 'POLLO BBQ',
      descripcion:
        '120gr de pollo a la plancha, queso, lechuga, tomate, cebolla y aderezo BBQ.',

      imagen: '/assets/images/bg-category/baguette.webp',
      precio: 150,
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
