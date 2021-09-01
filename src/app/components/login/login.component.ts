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
        if (data.token) {
          let rol = this.getDecodedAccessToken(data.token);
          localStorage.setItem('token', data.token);
          Swal.fire({
            title: 'Inicio de sesión correctamente',
            text: 'Ha ingresado exitosamente',
            icon: 'success',
            confirmButtonColor: 'green',
          }).then(x => {
            this.dirigir(rol);
          });
        } else {
          this.mensajeError('Se produjo un error', 'Se ha producido un error y no se pudo validar al usuario, verifique su información.');
        }
      },
      err => {
        console.log(err);
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
        const data:any = jwt_decode(token);
        return data.privileges[0].id;
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
        case 3:
           this.route.navigateByUrl('/homeAlquilador');
          break;
      
        default:
          break;
      }
    }
  }
}
