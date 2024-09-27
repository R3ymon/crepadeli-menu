import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

interface Categoria {
  nombre: string;
  imagen: string;
  ruta: string;
  etiqueta?: string;
}

@Component({
  selector: 'app-menu-category',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, NavBarComponent],
  templateUrl: './menu-category.component.html',
  styleUrl: './menu-category.component.css',
})
export class MenuCategoryComponent {
  // Arreglo de categorías con su imagen y ruta
  categorias: Categoria[] = [
    {
      nombre: 'Entradas',
      imagen: '/assets/images/bg-category/entradas.webp',
      ruta: '/entradas',
    },
    {
      nombre: 'Ensaladas',
      imagen: '/assets/images/bg-category/salad.webp',
      ruta: '/ensaladas',
    },
    {
      nombre: 'Hamburguesas',
      imagen: '/assets/images/bg-category/hamburguer.webp',
      ruta: '/hamburguesas',
    },
    {
      nombre: 'Baguettes',
      imagen: '/assets/images/bg-category/baguette.webp',
      ruta: '/baguettes',
    },
    {
      nombre: 'Crepas Dulces',
      imagen: '/assets/images/bg-category/crepadulce.webp',
      ruta: '/crepasdulces',
    },
    {
      nombre: 'Crepas Saladas',
      imagen: '/assets/images/bg-category/crepasalada.webp',
      ruta: '/crepassaladas',
      etiqueta: 'Mas vendido',
    },
    {
      nombre: 'Pastas',
      imagen: '/assets/images/bg-category/pasta.webp',
      ruta: '/pastas',
    },
    {
      nombre: 'Pizzas',
      imagen: '/assets/images/bg-category/pizza.webp',
      ruta: '/pizzas',
    },
    {
      nombre: 'Café / Té',
      imagen: '/assets/images/bg-category/cafe.webp',
      ruta: '/cafeyte',
    },
    {
      nombre: 'Bebidas / Smoothies',
      imagen: '/assets/images/bg-category/bebidas.webp',
      ruta: '/bebidas',
    },
  ];
}
