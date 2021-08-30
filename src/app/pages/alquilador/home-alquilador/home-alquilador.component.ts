import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-alquilador',
  templateUrl: './home-alquilador.component.html',
  styleUrls: ['./home-alquilador.component.css']
})
export class HomeAlquiladorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/']);
    }
  }

}
