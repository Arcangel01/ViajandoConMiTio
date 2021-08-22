import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/api/chofer/solicitudes.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-chofer',
  templateUrl: './home-chofer.component.html',
  styleUrls: ['./home-chofer.component.css']
})
export class HomeChoferComponent implements OnInit {

  solicitudes:any = [];

  active = false;

  constructor(private solicitudesService: SolicitudesService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/']);
    }
    this.verSolicitud();
  }

  verSolicitud() {
    this.solicitudesService.verSolicitudes()
    .subscribe((data:any) => {
      console.log(data);
      this.solicitudes = data.data;
    },
    err => {
      console.log(err);
    });
  }

  rechazar(item: any) {
    Swal.fire({
      title: 'Rechazar solicitud',
      text: 'Esta seguro de rechazar la solicitud?',
      icon: 'warning',
      confirmButtonColor: 'red',
    }).then(x => {
      item.active = false;
    });
  }

}
