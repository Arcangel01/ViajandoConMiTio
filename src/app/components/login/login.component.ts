import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: '',
  };

  constructor(private route: Router) {}

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
    let email = form.value.UserName;
    let password = form.value.Password;
    if (this.validarEmail(email) && this.validarCampos(email, password)) {
      console.log(form.value);
    }
  }
}
