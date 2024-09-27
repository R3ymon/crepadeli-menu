import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

interface Cafe {
  nombre: string;
  precio: number;
}
@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [NavBarComponent, CommonModule, RouterLinkWithHref],
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.css',
})
export class CafeComponent {
  cafeCalienteItems: Cafe[] = [
    { nombre: 'AMERICANO', precio: 39 },
    { nombre: 'MOCACCINO', precio: 55 },
    { nombre: 'CAPUCCINO', precio: 49 },
    { nombre: 'CAPUCCINO CAJETA', precio: 49 },
    { nombre: 'CAPUCCINO BAILEYS', precio: 65 },
    { nombre: 'CAPUCCINO AMARETTO', precio: 59 },
    { nombre: 'CAPUCCINO VAINILLA', precio: 59 },
    { nombre: 'CAPUCCINO MOKA', precio: 59 },
    { nombre: 'CAPUCCINO NUTELLA', precio: 59 },
    { nombre: 'MATCHA LATTE', precio: 69 },
    { nombre: 'CHAI LATTE VAINILLA', precio: 69 },
    { nombre: 'CHAI LATTE MANZANA - CANELA', precio: 69 },
    { nombre: 'AFFOGATO', precio: 69 },
    { nombre: 'TÉ CALIENTE', precio: 39 },
  ];

  cafeHeladoItems: Cafe[] = [
    { nombre: 'FRAPUCCINO', precio: 69 },
    { nombre: 'FRAPUCCINO CAJETA', precio: 75 },
    { nombre: 'FRAPUCCINO NUTELLA', precio: 75 },
    { nombre: 'FRAPUCCINO BAILEYS', precio: 75 },
    { nombre: 'FRAPUCCINO OREO', precio: 75 },
    { nombre: 'FRAPUCCINO AMARETTO', precio: 75 },
    { nombre: 'FRAPUCCINO M&M', precio: 75 },
    { nombre: 'FRAPUCCINO FERRERO ROCHER', precio: 80 },
    { nombre: 'FRAPUCCINO MOKA', precio: 80 },
    { nombre: 'FRAPUCCINO TWIX', precio: 80 },
    { nombre: 'ROCKADELI', precio: 69 },
    { nombre: 'CHOCOMILK', precio: 35 },
    { nombre: 'MATCHA LATTE FRÍO', precio: 69 },
    { nombre: 'MATCHA FRAPPE', precio: 75 },
    { nombre: 'CHAI LATTE FRIO', precio: 69 },
    { nombre: 'CHAI FRAPPE', precio: 75 },
    { nombre: 'VASO C/ LECHE', precio: 30 },
  ];
}
