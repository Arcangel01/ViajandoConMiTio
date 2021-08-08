import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

    // Iniciar Sesion
    logueo(userCredentials: any) {
      return this.http.post(environment.path + 'auth/login', userCredentials);
    }
}
