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
    return this.http.post('http://34.67.163.83:8000/api/v1/' + 'car', cars, {headers : this.tokenHeader});
  }

  // Ver vehiculos
  verVehiculos() {
    return this.http.get('http://34.67.163.83:8000/api/v1/' + 'car', {headers : this.tokenHeader});
  }

}
