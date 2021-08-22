import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistroServiceService } from '../../api/registro-service.service';

@Component({
  selector: 'app-registro-chofer',
  templateUrl: './registro-chofer.component.html',
  styleUrls: ['./registro-chofer.component.css']
})
export class RegistroChoferComponent implements OnInit {

  formModel = {
    name: '',
    lastName: '',
    document: '',
    phone: '',
    email: '',
    address: '',
    birth: '',
    licencia: '',
    policial: '',
    password: '',
    confirmPass: ''
  };

  constructor(private registroService: RegistroServiceService, private route: Router) { }

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
    if (form.value.name.length <= 0) {
      this.mensajeError(
        'Campo Nombre vacio',
        'Por favor ingrese un valor en el campo nombre'
      );
      return false;
    } else if (form.value.lastName.length <= 0) {
      this.mensajeError(
        'Campo Apellidos vacio',
        'Por favor ingrese un valor en el campo apellidos'
      );
      return false;
    } else if (form.value.document.length <= 0) {
      this.mensajeError(
        'Campo Cedula vacio',
        'Por favor ingrese un valor en el campo cedula'
      );
      return false;
    } else if (form.value.phone.length <= 0) {
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
    } else if (form.value.address.length <= 0) {
      this.mensajeError(
        'Campo dirección vacio',
        'Por favor ingrese un valor en el campo dirección'
      );
      return false;
    } else if (form.value.birth.length <= 0) {
      this.mensajeError(
        'Campo Fecha de nacimiento vacio',
        'Por favor ingrese un valor en el campo fecha de nacimiento'
      );
      return false;
    // } else if (form.value.licencia.length <= 0) {
    //   this.mensajeError(
    //     'Campo tipo de licencia vacio',
    //     'Por favor ingrese un valor en el campo tipo de licencia'
    //   );
    //   return false;
    // } else if (form.value.policial.length <= 0) {
    //   this.mensajeError(
    //     'Campo record policial vacio',
    //     'Por favor ingrese un valor en el campo record policial'
    //   );
    //   return false;
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
    const data = { ...form.value, privileges_id: [
      2
    ]}
    let email = form.value.email;
    if (this.validarEmail(email) && this.validarCampos(form)) {
      this.registroService.registrarUsuario(data)
      .subscribe(data => {
        console.log(data);
        if (data.message == "user created") {
          Swal.fire({
            title: 'Registro completo',
            text: 'Ha sido registrado exitosamente',
            icon: 'success',
            confirmButtonColor: 'green',
          }).then(x => {
            this.route.navigateByUrl('/homeChofer');
          });
        } else {
          this.mensajeError('Se produjo un error', 'Se ha producido un error y no se pudo registrar al usuario, verifique su información.');
        }
      },
      err => {
        this.mensajeError('Se produjo un error', 'Se ha producido un error y no se pudo registrar al usuario, verifique su información.');
        console.log(err);
      });
    }
  }

}
