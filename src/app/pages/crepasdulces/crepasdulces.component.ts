import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';

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
  selector: 'app-crepasdulces',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkWithHref,
    NavBarComponent,
    CarruselComponent,
  ],
  templateUrl: './crepasdulces.component.html',
  styleUrl: './crepasdulces.component.css',
})
export class CrepasdulcesComponent {
  platillos: Platillo[] = [
    {
      nombre: 'CREPA DULCE',
      descripcion: '¡Armala a tu gusto!, incluye hasta 4 ingredientes.',

      imagen: '/assets/images/images/crepasdulces/crepa1.webp',
      precio: 84,
    },

    // Agrega más platillos aquí
  ];
  ingredientes: string[] = [
    'Fresa',
    'Durazno',
    'Nuez',
    'Cajeta',
    'Nutella',
    'Miel',
    'Platano',
    'Philadelphia',
    'Mermelada de fresa',
    'Lechera',
    'Amaretto',
    'Kiwi',
    'Baileys',
    'Mermelada de frambuesa',
    'Crema de cacahuate',
    'Chocolate',
    'Nieve',
    'Chantilly',
    'Piña',
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
