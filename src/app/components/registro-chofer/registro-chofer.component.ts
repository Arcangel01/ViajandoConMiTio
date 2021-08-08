import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-chofer',
  templateUrl: './registro-chofer.component.html',
  styleUrls: ['./registro-chofer.component.css']
})
export class RegistroChoferComponent implements OnInit {

  formModel = {
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    email: '',
    tipoSangre: '',
    fechaNacimiento: '',
    licencia: '',
    policial: '',
    password: '',
    confirmPass: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  mensajeError(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonColor: 'red',
    });
  }

  validarCampos(form: NgForm) {
    if (form.value.nombre.length <= 0) {
      this.mensajeError(
        'Campo Nombre vacio',
        'Por favor ingrese un valor en el campo nombre'
      );
      return false;
    } else if (form.value.apellido.length <= 0) {
      this.mensajeError(
        'Campo Apellidos vacio',
        'Por favor ingrese un valor en el campo apellidos'
      );
      return false;
    } else if (form.value.cedula.length <= 0) {
      this.mensajeError(
        'Campo Cedula vacio',
        'Por favor ingrese un valor en el campo cedula'
      );
      return false;
    } else if (form.value.telefono.length <= 0) {
      this.mensajeError(
        'Campo Telefono vacio',
        'Por favor ingrese un valor en el campo telefono'
      );
      return false;
    } else if (form.value.email.length <= 0) {
      this.mensajeError(
        'Campo Email vacio',
        'Por favor ingrese un valor en el campo email'
      );
      return false;
    } else if (form.value.tipoSangre.length <= 0) {
      this.mensajeError(
        'Campo tipo de sangre vacio',
        'Por favor ingrese un valor en el campo tipo de sangre'
      );
      return false;
    } else if (form.value.fecha.length <= 0) {
      this.mensajeError(
        'Campo Fecha de nacimiento vacio',
        'Por favor ingrese un valor en el campo fecha de nacimiento'
      );
      return false;
    } else if (form.value.licencia.length <= 0) {
      this.mensajeError(
        'Campo tipo de licencia vacio',
        'Por favor ingrese un valor en el campo tipo de licencia'
      );
      return false;
    } else if (form.value.policial.length <= 0) {
      this.mensajeError(
        'Campo record policial vacio',
        'Por favor ingrese un valor en el campo record policial'
      );
      return false;
    } else if (form.value.password.length <= 0) {
      this.mensajeError(
        'Campo Password vacio',
        'Por favor ingrese un valor en el campo password'
      );
      return false;
    } else {
      return true;
    }
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

  registro(form: NgForm) {
    let email = form.value.email;
    if (this.validarEmail(email) && this.validarCampos(form)) {
      console.log(form.value);
    }
  }

}
