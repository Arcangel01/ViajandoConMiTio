import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroServiceService {

  constructor(private http: HttpClient) { }

  registrarUsuario(body: any) {
    return this.http.post(environment.path + 'auth/signup', body);
  }
}
