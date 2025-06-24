import { Routes } from '@angular/router';

export const rickyRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/all-character/all-character').then((m) => m.AllCharacter),
  },
  {
    path: ':characterId',
    loadComponent: () =>
      import('./pages/single-chacharacter/single-chacharacter').then(
        (m) => m.SingleChacharacter
      ),
  },
];
