import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/client/menu/menu.component';
import { KDashboardComponent } from './pages/staff/kitchen/k-dashboard/k-dashboard.component';
import { DDashboardComponent } from './pages/staff/dinningroom/d-dashboard/d-dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'kitchen', component: KDashboardComponent },
  { path: 'dinningroom', component: DDashboardComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
