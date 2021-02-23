import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'registrati', loadChildren: () => import('./registrati/registrati.module').then(m => m.RegistratiModule) },
  { path: 'carrello', loadChildren: () => import('./features/carrello/carrello.module').then(m => m.CarrelloModule) },
  { path: 'registrati', loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'registrati', loadChildren: () => import('./features/registrati/registrati.module').then(m => m.RegistratiModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'personalizza', loadChildren: () => import('./features/personalizza/personalizza.module').then(m => m.PersonalizzaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
