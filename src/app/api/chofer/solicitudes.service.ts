import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private http: HttpClient) { }

  tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});

    // Ver solicitudes
    verSolicitudes() {
      return this.http.get('http://34.67.163.83:8000/api/v1/' + 'request/active', {headers : this.tokenHeader});
    }

    // Ver detalle cliente
    verDetalleCliente() {
      return this.http.get('http://34.67.163.83:8000/api/v1/' + 'user/me', {headers : this.tokenHeader});
    }
}
