import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { SolicitudVehiculoService } from '../../api/cliente/solicitud-vehiculo.service';

@Component({
  selector: 'app-navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.css']
})
export class NavbarClienteComponent implements OnInit {

  formModel = {
    origin: '',
    destiny: '',
    price: '',
    comment: ''
  };

  constructor(private solicitudService: SolicitudVehiculoService) { }

  ngOnInit(): void {
  }

  solicitud(form: NgForm) {
    console.log(form.value);
    if (form.value) {
      this.solicitudService.request(form.value)
      .subscribe((data: any) => {
        if (data.message == "request created") {          
          Swal.fire({
            title: 'Solicitud enviada',
            text: 'Ha registrado una solicitud',
            icon: 'success',
            confirmButtonColor: 'green',
          }).then(x => {
            form.reset();
          })
        }
      },
      err => {
        console.log('ERROR');
      });
    }
  }

}
