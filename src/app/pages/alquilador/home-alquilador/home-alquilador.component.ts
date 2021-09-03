import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../../../api/alquilador/cars.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home-alquilador',
  templateUrl: './home-alquilador.component.html',
  styleUrls: ['./home-alquilador.component.css']
})
export class HomeAlquiladorComponent implements OnInit {

  vehiculos:any = [];

  token:any = null;

  constructor(private router: Router, private carService: CarsService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/']);
    }
    this.getVehiculos();
  }

  getDecodedAccessToken(token: string): any {
    try{
        const data:any = jwt_decode(token);
        console.log(data.id);
        return data.id;
    }
    catch(Error){
        return null;
    }
  }

  getVehiculos() {
    this.carService.verVehiculos()
    .subscribe((data: any) => {
      this.token = localStorage.getItem('token');
      let id = this.getDecodedAccessToken(this.token);
      // Ahora filtrar por id;
      
      this.vehiculos = data;
      console.log(this.vehiculos);
    },
    err => {
      console.log(err);
    });
  }

}
