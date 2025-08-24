import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import {ExchangeReviewComponent} from './pages/exchange-review/exchange-review.component';

export const routes: Routes = [
  // Home route
  {
    path: '',
    component: HomeComponent
  },

  // Test route - для тестирования верстки
  {
    path: 'test',
    component: ExchangeReviewComponent
  },

  // Redirect any invalid routes to home
  {
    path: '**',
    redirectTo: ''
  }
];
