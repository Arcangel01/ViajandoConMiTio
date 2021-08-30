import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http: HttpClient) { }

  // Registrar imagenes
  saveImage(file: File) {
    const fd= new FormData;
    fd.append('file',file,file.name);
    return this.http.post(environment.path + 'upload/one', fd);
  }
}
