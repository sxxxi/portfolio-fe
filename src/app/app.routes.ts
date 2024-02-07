import { Data, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';

export interface Ex extends Data {
  permissions: string[]
}

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, data: { permissions: ['create-project'] } },
];