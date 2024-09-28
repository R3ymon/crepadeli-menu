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
  selector: 'app-crepassaladas',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, NavBarComponent],
  templateUrl: './crepassaladas.component.html',
  styleUrl: './crepassaladas.component.css',
})
export class CrepassaladasComponent {
  platillos: Platillo[] = [
    {
      nombre: 'CHERA',
      descripcion: 'Carne arrachera, queso, guacamlo y pico de gallo',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 127,
    },
    {
      nombre: 'MEXICANA',
      descripcion: 'Queso, jalapeño, chorizo y aguacate.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 107,
    },
    {
      nombre: 'ARGENTINA',
      descripcion: 'Queso, salchicha argentina guisada en salsa pesto.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 107,
    },
    {
      nombre: 'CREPINO',
      descripcion:
        'Pollo, champiñones salteados, tomate deshidratado, salsa pesto cremosa y queso.',

      imagen: '/assets/images/logo/logorojo.webp',
      precio: 107,
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

  // Nueva propiedad "items" para las cards con texto a la izquierda y derecha
  items: {
    textoIzquierda: string;
    textodescripcion: string;
    textoDerecha: string;
  }[] = [
    {
      textoIzquierda: 'HAWAIANA',
      textodescripcion: 'Queso, jamón y piña',
      textoDerecha: '$99.00',
    },
    {
      textoIzquierda: 'POMODORO',
      textodescripcion: 'Pollo, queso y salsa pomodoro',
      textoDerecha: '$109.00',
    },
    {
      textoIzquierda: 'ITALIANA',
      textodescripcion: 'Queso, salami y pepperoni',
      textoDerecha: '$99.00',
    },
    {
      textoIzquierda: 'ALFREDO',
      textodescripcion: 'Queso, pollo bañado en salsa Alfredo.',
      textoDerecha: '$109.00',
    },
    {
      textoIzquierda: 'CLASICA',
      textodescripcion: 'Queso, jamón y champiñones',
      textoDerecha: '$97.00',
    },
    {
      textoIzquierda: 'CHILOSA BOCADO',
      textodescripcion: 'Queso, chilorio y aguacate.',
      textoDerecha: '$107.00',
    },
    {
      textoIzquierda: 'CHAMPI',
      textodescripcion: 'Queso y champiñones',
      textoDerecha: '$87.00',
    },
    {
      textoIzquierda: 'DEL MAR',
      textodescripcion: 'Queso y atún.',
      textoDerecha: '$60.00',
    },
    {
      textoIzquierda: 'SINCRONIZADA',
      textodescripcion: 'Queso, jamón y aguacate.',
      textoDerecha: '$97.00',
    },
    {
      textoIzquierda: 'VEGETARIANA',
      textodescripcion: 'Queso, jitomate, pimiento y aceitunas.',
      textoDerecha: '$97.00',
    },
    {
      textoIzquierda: 'PEPERONI',
      textodescripcion: 'Queso y peperoni.',
      textoDerecha: '$87.00',
    },
    {
      textoIzquierda: 'JAMÓN',
      textodescripcion: 'Queso y jamón.',
      textoDerecha: '$87.00',
    },
    {
      textoIzquierda: 'CHILOSA',
      textodescripcion: 'Queso y chilorio.',
      textoDerecha: '$87.00',
    },
    {
      textoIzquierda: 'CHAMPI BOCADO',
      textodescripcion: 'Queso, champiñones y aguacate.',
      textoDerecha: '$95.00',
    },

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
