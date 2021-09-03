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
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/']);
    }
    this.verSolicitud();
  }

  verSolicitud() {
    this.solicitudesService.verSolicitudes()
    .subscribe((data:any) => {
      this.solicitudes = data;
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
      if (x.isConfirmed) {
        // this.solicitudesService.disable(item.id)
        // .subscribe(x => {
        //   console.log(x);
        // }, 
        // err => {
        //   console.log(err);
        // });
        item.active = false;
      }
    });
  }

  index = 0;
  verDetalle(i:number) {
    console.log(i);
    this.index = i;
  }

  confirmar(item:any) {
    item.active = false;
  }

}
