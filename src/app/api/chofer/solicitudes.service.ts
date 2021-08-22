import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private http: HttpClient) { }

    // Ver solicitudes
    verSolicitudes() {
      const tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.get(environment.path + 'request/active', {headers : tokenHeader});
    }
}
