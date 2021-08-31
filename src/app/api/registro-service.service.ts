import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroServiceService {

  constructor(private http: HttpClient) { }

  registrarUsuario(body: any):Observable<any> {
    return this.http.post('http://34.67.163.83:8000/api/v1/' + 'auth/signup', body);
  }
}
