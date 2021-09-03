import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SolicitudVehiculoService {
  constructor(private http: HttpClient) {}

  // Solicitud
  request(req: any) {
    const tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post('http://34.67.163.83:8000/api/v1/' + 'request', req, {headers : tokenHeader});
  }

}
