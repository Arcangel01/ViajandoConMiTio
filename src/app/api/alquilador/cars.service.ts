import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});

  // Registrar vehiculo
  registerCars(cars: any) {
    return this.http.post(environment.path + 'car', cars, {headers : this.tokenHeader});
  }

  // Ver vehiculos
  verVehiculos() {
    return this.http.get(environment.path + 'car', {headers : this.tokenHeader});
  }

}
