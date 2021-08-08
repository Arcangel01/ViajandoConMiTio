import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  irInicio() {
    this.route.navigateByUrl('');
  }

  irLogin() {
    this.route.navigateByUrl('login');
  }

  irRegistro(id: number) {
    switch (id) {
      case 1:
        this.route.navigateByUrl('registro');
        break;
      case 2:
        this.route.navigateByUrl('registroChofer');
        break;
      case 3:
        this.route.navigateByUrl('registroAlquilador');
        break;
      default:
        break;
    }
  }

}
