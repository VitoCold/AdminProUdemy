import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {
    init_plugins();
  }

  ngOnInit() {}

  ingresar() {
    this.router.navigate(['/dashboard']);
  }
}
