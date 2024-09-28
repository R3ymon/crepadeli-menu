import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

interface Platillo {
  nombre: string; // Nombre del platillo
  descripcion: string; // Descripción del platillo
  descripcion2?: string;
  imagen: string; // URL de la imagen del platillo
  precio?: number; // Precio del platillo
  etiqueta?: string; // Etiqueta (opcional)
}

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [NavBarComponent, CommonModule, RouterLinkWithHref],
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.css',
})
export class EntradasComponent {
  platillos: Platillo[] = [
    {
      nombre: 'SAMPLER',
      descripcion:
        'Dedos de queso, aros de cebolla, papas a la francesa y 240gr de tiras de pollo (BBQ, Buffalo o Mango habenero)',
      imagen: '/assets/images/carrusel/sample.webp',
      precio: 220,
    },
    {
      nombre: 'PAPAS PREPARADAS',
      descripcion:
        'Papas fritas en rodajas, sazonadas con salsa picante, limón y soya.',
      imagen: '/assets/images/images/entradas/papas.webp',
      precio: 69,
    },
    {
      nombre: 'CHAMPIÑONES AL AJILLO',
      descripcion:
        'Champiñones salteados en mantequilla, sazonado con ajo y chile',
      imagen: '/assets/images/images/entradas/champi.webp',
      precio: 87,
    },
    {
      nombre: 'ORDEN DE PAN',
      descripcion: 'Pan sesgado sazonado',
      imagen: '/assets/images/images/entradas/pan.webp',
      precio: 55,
    },
    {
      nombre: 'ROLLOS DE JAMÓN SERRANO',
      descripcion:
        'Rollos de jamón serrano con queso en reduccíon de bálsamico.',
      imagen: '/assets/images/bg-category/entradas.webp',
      precio: 140,
    },
    {
      nombre: 'TAPAS',
      descripcion:
        'Tapas de pan con queso acompañadas de 1 topping de tu eleccion (Pepperoni, jamón, salami, champiñon o chorizo)',
      imagen: '/assets/images/images/entradas/tapas.webp',
      precio: 97,
    },
    {
      nombre: 'QUESO CREPADELI',
      descripcion:
        'Queso fundido acompañado de nuestra salsa especial y pan de la casa.',
      imagen: '/assets/images/bg-category/entradas.webp',
      precio: 105,
    },
    {
      nombre: 'HUMMUS',
      descripcion: 'Pure de garbanzo, ajo, oliva, acompañado de pan pita.',
      imagen: '/assets/images/bg-category/entradas.webp',
      precio: 80,
    },
    {
      nombre: 'TIRAS DE PECHUGA',
      descripcion:
        'BBQ o Buffalo, acompañadas de salsa ranch y tiras de zanahoria.',
      imagen: '/assets/images/images/entradas/boneless.webp',
      precio: 140,
    },
    {
      nombre: 'DELI ARRACHERA',
      descripcion:
        '400gr de arrachera bañada en una salsa a base de pimienta. Acompañada de papas gajo y ensadala fresca.',
      imagen: '/assets/images/bg-category/entradas.webp',
      precio: 220,
    },
    {
      nombre: 'PAPAS ESPECIALES',
      descripcion:
        '300gr de papas bañadas en salsa cremosa de la casa con queso y topping de tocino.',
      imagen: '/assets/images/bg-category/entradas.webp',
      precio: 119,
    },
    // Agrega más platillos aquí
  ];

  // Nueva propiedad "items" para las cards con texto a la izquierda y derecha
  items: { textoIzquierda: string; textoDerecha: string }[] = [
    { textoIzquierda: 'PAPAS A LA FRANCESA', textoDerecha: '$80.00' },
    { textoIzquierda: 'PAPAS GAJO', textoDerecha: '$85.00' },
    { textoIzquierda: 'AROS DE CEBOLLA', textoDerecha: '$70.00' },
    { textoIzquierda: 'DEDOS DE QUESO', textoDerecha: '$85.00' },

    // Agrega más items si es necesario
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
