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
  selector: 'app-pizzas',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, NavBarComponent],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.css',
})
export class PizzasComponent {
  platillos: Platillo[] = [
    {
      nombre: 'ARRACHERA',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 230,
      precio2: 195,
    },
    {
      nombre: 'OSTIONES AHUMADOS',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 199,
      precio2: 164,
    },
    {
      nombre: 'CAMARÓN',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 249,
      precio2: 214,
    },
    {
      nombre: 'ALFREDO CON POLLO',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 210,
      precio2: 175,
    },
    {
      nombre: 'ALFREDO CON CAMARÓN',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 245,
      precio2: 210,
    },
    {
      nombre: 'JAMÓN SERRANO',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 255,
      precio2: 220,
    },
    {
      nombre: 'BBQ c/ POLLO A LA PLANCHA',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 230,
      precio2: 195,
    },
    {
      nombre: 'BUFFALO c/ POLLO A LA PLANCHA',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 230,
      precio2: 195,
    },
    {
      nombre: 'BBQ CON BONELESS',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 245,
      precio2: 210,
    },
    {
      nombre: 'BUFFALO CON BONESLESS',
      descripcion: '',

      imagen: '/assets/images/bg-category/pizza.webp',
      precio: 245,
      precio2: 210,
    },

    // Agrega más platillos aquí
  ];
  ingredientes: string[] = [
    'Peperoni',
    'Jamón',
    'Tocino',
    'Champiñones',
    'Tomate',
    'Aceitunas',
    'Chilorio',
    'Chorizo',
    'Aguacate',
    'Jalapeños',
    'Pimiento',
    'Salami',
    'Philadelphia',
    'Alcaparras',
    'Cebolla',
    'Piña',
    'Atún',
    'Salchicha Argentina',
    'Tomate deshidratado',
  ];

  // Agrega más items si es necesario

  platilloSeleccionado: Platillo | null = null;

  abrirModal(platillo: Platillo) {
    this.platilloSeleccionado = platillo;
    // Aquí puedes abrir el modal
  }
  cerrarModal() {
    this.platilloSeleccionado = null;
  }
}
