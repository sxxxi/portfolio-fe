import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { authGuard } from './auth.guard';

export const adminRoutes: Routes = [
  { path: "admin", canActivate: [authGuard], children: [
    { path: "projects", component: ProjectsComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
