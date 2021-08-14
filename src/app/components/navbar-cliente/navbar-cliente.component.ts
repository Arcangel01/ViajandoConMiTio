import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.css']
})
export class NavbarClienteComponent implements OnInit {

  formModel = {
    origen: '',
    destino: '',
    tarifa: '',
    comentarios: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  solicitud(form: NgForm) {
    console.log(form.value);
    if (form.value) {
      Swal.fire({
        title: 'Solicitud enviada',
        text: 'Ha registrado una solicitud',
        icon: 'success',
        confirmButtonColor: 'green',
      })
    }
  }

}
