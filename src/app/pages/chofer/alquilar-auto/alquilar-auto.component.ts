import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../api/alquilador/cars.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alquilar-auto',
  templateUrl: './alquilar-auto.component.html',
  styleUrls: ['./alquilar-auto.component.css']
})
export class AlquilarAutoComponent implements OnInit {

  vehiculos:any = [];

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos() {
    this.carService.verVehiculos()
    .subscribe((data: any) => {
      this.vehiculos = data;
      console.log(this.vehiculos);
    },
    err => {
      console.log(err);
    });
  }

  contactar() {
    Swal.fire({
      title: 'Contactar vehiculo',
      text: 'Solicitud para el vehivulo de ha enviado correctamente',
      icon: 'success',
      confirmButtonColor: 'green',
    });
  }

}
