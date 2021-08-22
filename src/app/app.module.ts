import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroChoferComponent } from './components/registro-chofer/registro-chofer.component';
import { RegistroAlquiladorComponent } from './components/registro-alquilador/registro-alquilador.component';
import { HomeClienteComponent } from './pages/cliente-final/home-cliente/home-cliente.component';
import { NavbarClienteComponent } from './components/navbar-cliente/navbar-cliente.component';
import { HomeChoferComponent } from './pages/chofer/home-chofer/home-chofer.component';
import { NavbarChoferComponent } from './components/navbar-chofer/navbar-chofer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroClienteComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    RegistroChoferComponent,
    RegistroAlquiladorComponent,
    HomeClienteComponent,
    NavbarClienteComponent,
    HomeChoferComponent,
    NavbarChoferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
