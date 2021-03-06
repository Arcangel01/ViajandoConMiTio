import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-chofer',
  templateUrl: './navbar-chofer.component.html',
  styleUrls: ['./navbar-chofer.component.css']
})
export class NavbarChoferComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    Swal.fire({
      title: 'Cerrar sesión',
      text: 'Esta seguro de cerrar la sesión?',
      icon: 'warning',
      confirmButtonColor: 'red',
    }).then(x => {
      if (x.isConfirmed) {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      }
    });
  }

  publicVehiculo() {
    this.router.navigateByUrl('alquilarAuto');
  }

  inicio() {
    this.router.navigateByUrl('homeChofer');
  }

}
