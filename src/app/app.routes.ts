import { Routes } from '@angular/router';
import { Login } from './core/auth/components/login/login';
import { Signup } from './core/auth/components/signup/signup';
import { Landing } from './core/landing/landing';
import { AuthGuard } from './core/auth/data-access/auth.gaurd';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'landing', component: Landing, canActivate: [AuthGuard] }
];

