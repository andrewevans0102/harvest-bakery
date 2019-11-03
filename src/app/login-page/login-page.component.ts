import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email = 'WookieLove@starwars.com';
  password = 'fuzzBall';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  async onSubmit() {
    await this.authService.login(this.email, this.password);
    this.router.navigateByUrl('/orders-page');
  }
}
