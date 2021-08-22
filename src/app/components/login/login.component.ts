import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/api/login.service';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formModel = {
    email: '',
    password: '',
  };

  constructor(private route: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  mensajeError(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonColor: 'red',
    });
  }

  validarEmail(email: string) {
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regex.test(email) && email.length > 0) {
      this.mensajeError('Email incorrecto', 'El email ingresado no tiene el formato correcto.')
      return false;
    } else {
      return true;
    }
  }

  validarCampos(email: string, pass: string) {
    if (email.length <= 0) {
      this.mensajeError('Campo Email vacio', 'Por favor ingrese un valor en el campo email');
      return false;
    } else if (pass.length <= 0) {
      this.mensajeError('Campo Password vacio', 'Por favor ingrese un valor en el campo password');
      return false;
    } else {
      return true;
    }
  }

  irRegistro() {
    this.route.navigateByUrl('registro');
  }

  login(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    if (this.validarEmail(email) && this.validarCampos(email, password)) {
      this.loginService.logueo(form.value)
      .subscribe((data: any) => {
        console.log(data);
        if (data.token) {
          this.getDecodedAccessToken(data.token);
          localStorage.setItem('token', data.token);
          Swal.fire({
            title: 'Inicio de sesión correctamente',
            text: 'Ha ingresado exitosamente',
            icon: 'success',
            confirmButtonColor: 'green',
          }).then(x => {
            this.dirigir(1);
          });
        } else {
          this.mensajeError('Se produjo un error', 'Se ha producido un error y no se pudo validar al usuario, verifique su información.');
        }
      },
      err => {
        console.log(err);
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyY2ExMEBnbWFpbC5jb20iLCJwcml2aWxlZ2VzIjpbeyJpZCI6MSwiY3JlYXRlZEF0IjoiMjAyMS0wOC0yMVQxNToxMzoxMS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMS0wOC0yMVQxNToxMzoxMS4wMDBaIiwiZGVsZXRlZCI6ZmFsc2UsIm5hbWUiOiJDbGllbnRlIGZpbmFsIiwiZGVzY3JpcHRpb24iOiJVc3VhcmlvIGZpbmFsIHF1ZSBoYXLDoSB1c28gZGVsIGFwbGljYXRpdm8ifV0sImlhdCI6MTYyOTU2Mzg0MywiZXhwIjoxNjI5NjA3MDQzfQ.LvGmNF1uPMcPTN8uwpi9OFNPtFMc0ac3ygDtr1a0DqY')
        if(err.status === 400) {
          this.mensajeError('Credenciales Incorrectas', 'Por favor verifique sus credenciales');
        } else {
          this.mensajeError('Se produjo un error', 'Se ha producido un error y no se pudo validar al usuario, verifique su información.');
        }
      });
    }
  }

  getDecodedAccessToken(token: string): any {
    try{
      console.log(jwt_decode(token));
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  // Redireccionar
  dirigir(rol: number) {
    if (localStorage.getItem('token') != null) {
      switch (rol) {
        case 1:
          this.route.navigateByUrl('/homeCliente');
          break;
        case 2:
          this.route.navigateByUrl('/homeChofer');
          break;
      
        default:
          break;
      }
    }
  }
}
