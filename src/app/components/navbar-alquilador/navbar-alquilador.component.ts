import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CarsService } from '../../api/alquilador/cars.service';
import { ImagenesService } from '../../api/imagenes.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar-alquilador',
  templateUrl: './navbar-alquilador.component.html',
  styleUrls: ['./navbar-alquilador.component.css']
})
export class NavbarAlquiladorComponent implements OnInit {

  selectedFile!: File;
  image:SafeStyle = 'https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135_960_720.png';

  vehiculo = {
    brand:"",
    color:"",
    photos:["https://viajando-tio.s3.amazonaws.com/1629261527404.1625141410671-min.jpg"],
    license_plate:"",
    seat:4
  }

  constructor(private router: Router, private carService: CarsService, 
    private imgServices: ImagenesService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onLogout() {
    Swal.fire({
      title: 'Cerrar sesión',
      text: 'Esta seguro de cerrar la sesión?',
      icon: 'warning',
      confirmButtonColor: 'red',
    }).then(x => {
      if (x.isConfirmed) {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      }
    });
  }

  mensajeError(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonColor: 'red',
    });
  }

  img = '';
  cargarImagen(event: any){

    let reader = new FileReader();

    this.selectedFile = <File> event.target.files[0];

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = function() {
      let preview: any = document.getElementById('preview');
      let image: any = document.createElement('img');
      image.src = reader.result;
      image.style.width = '200px';
      preview.innerHTML = '';
      preview.append(image);
    }
  }

  publicarVehiculo(form: NgForm) {
    this.imgServices.saveImage(this.selectedFile)
    .subscribe((data: any) => {
      console.log(data);
      if (data.message == 'File uploaded Successfully') {
        this.vehiculo = form.value
        this.vehiculo.photos = [data.location];
        this.carService.registerCars(this.vehiculo)
        .subscribe((data: any) => {
          console.log(data);
          if (data.message == 'car saved') {
            Swal.fire({
              title: 'Vehiculo registrado',
              text: 'Ha registrado el vehiculo correctamente',
              icon: 'success',
              confirmButtonColor: 'green',
            }).then(x => {
              form.reset();
            });
          }
        },
        err => {
          console.log(err);
          if (err.status === 409) {
            this.mensajeError('Ups!', 'Parece ser que este auto ya está registrado.');
          } else {
            this.mensajeError('Se produjo un error', 'Se ha producido un error y no se pudo registrar el vehiculo.');
          }
        });
      }else {
         this.mensajeError('Se produjo un error', 'Se ha producido un error y no se pudo registrar el vehiculo.');
      }
    },
    err => {
      console.log(err);
    });
  }

}
