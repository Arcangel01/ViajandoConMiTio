import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroAlquiladorComponent } from './components/registro-alquilador/registro-alquilador.component';
import { RegistroChoferComponent } from './components/registro-chofer/registro-chofer.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeClienteComponent } from './pages/cliente-final/home-cliente/home-cliente.component';
import { HomeChoferComponent } from './pages/chofer/home-chofer/home-chofer.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroClienteComponent
  },
  {
    path: 'registroChofer',
    component: RegistroChoferComponent
  },
  {
    path: 'registroAlquilador',
    component: RegistroAlquiladorComponent
  },
  {
    path: 'homeCliente',
    component: HomeClienteComponent
  },
  {
    path: 'homeChofer',
    component: HomeChoferComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
