import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full' },
  { path: 'home', component: HomePageComponent}//,  canActivate: [AuthGuard] }, this we will add as extra service to restrict users and admin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
