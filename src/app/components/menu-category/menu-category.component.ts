import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { FooterComponent } from '../footer/footer.component';

interface Categoria {
  nombre: string;
  imagen: string;
  ruta: string;
  etiqueta?: string;
}

@Component({
  selector: 'app-menu-category',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkWithHref,
    NavBarComponent,
    CarruselComponent,
    FooterComponent,
  ],
  templateUrl: './menu-category.component.html',
  styleUrl: './menu-category.component.css',
})
export class MenuCategoryComponent implements AfterViewInit {
  @ViewChildren('animateSection') animateSections!: QueryList<ElementRef>;

  categorias: Categoria[] = [
    {
      nombre: 'Entradas',
      imagen: '/assets/images/svg/entrada.svg',
      ruta: '/entradas',
    },
    {
      nombre: 'Ensaladas',
      imagen: '/assets/images/svg/salad.svg',
      ruta: '/ensaladas',
    },
    {
      nombre: 'Hamburguesas',
      imagen: '/assets/images/svg/ham.svg',
      ruta: '/hamburguesas',
    },
    {
      nombre: 'Baguettes',
      imagen: '/assets/images/svg/bag.svg',
      ruta: '/baguettes',
    },
    {
      nombre: 'Crepas Dulces',
      imagen: '/assets/images/svg/crepe.svg',
      ruta: '/crepasdulces',
    },
    {
      nombre: 'Crepas Saladas',
      imagen: '/assets/images/svg/salt.svg',
      ruta: '/crepassaladas',
      etiqueta: 'Mas vendido',
    },
    {
      nombre: 'Pastas',
      imagen: '/assets/images/svg/spageti.svg',
      ruta: '/pastas',
    },
    {
      nombre: 'Pizzas',
      imagen: '/assets/images/svg/pizza.svg',
      ruta: '/pizzas',
    },
    {
      nombre: 'Café / Té',
      imagen: '/assets/images/svg/coffe.svg',
      ruta: '/cafeyte',
    },
    {
      nombre: 'Bebidas / Smoothies',
      imagen: '/assets/images/svg/drink.svg',
      ruta: '/bebidas',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Dejar de observar después de ser visible
          }
        });
      },
      {
        threshold: 0.1, // Cuando el 10% del elemento sea visible
      }
    );

    // Observa cada sección marcada en el HTML
    this.animateSections.forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }
}
