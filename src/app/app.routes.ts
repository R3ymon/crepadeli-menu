import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { EnsaldasComponent } from './pages/ensaldas/ensaldas.component';
import { HamburguesasComponent } from './pages/hamburguesas/hamburguesas.component';
import { BeguettesComponent } from './pages/beguettes/beguettes.component';
import { CrepasdulcesComponent } from './pages/crepasdulces/crepasdulces.component';
import { CrepassaladasComponent } from './pages/crepassaladas/crepassaladas.component';
import { PastasComponent } from './pages/pastas/pastas.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { CafeComponent } from './pages/cafe/cafe.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'menu-category',
    component: MenuCategoryComponent,
  },
  {
    path: 'entradas',
    component: EntradasComponent,
  },
  {
    path: 'ensaladas',
    component: EnsaldasComponent,
  },
  {
    path: 'hamburguesas',
    component: HamburguesasComponent,
  },
  {
    path: 'baguettes',
    component: BeguettesComponent,
  },
  {
    path: 'crepasdulces',
    component: CrepasdulcesComponent,
  },
  {
    path: 'crepassaladas',
    component: CrepassaladasComponent,
  },
  {
    path: 'pastas',
    component: PastasComponent,
  },
  {
    path: 'pizzas',
    component: PizzasComponent,
  },
  {
    path: 'cafeyte',
    component: CafeComponent,
  },
  {
    path: 'bebidas',
    component: BebidasComponent,
  },
];
