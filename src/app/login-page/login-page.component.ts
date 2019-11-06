import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // for a list of users, consult local-server/data/users.json
  email = 'HanSolo@gmail.com';
  password = 'password1';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  async onSubmit() {
    try {
      const loginResponse = await this.authService.login(
        this.email,
        this.password
      );
      localStorage.setItem('login', JSON.stringify(loginResponse));
      this.router.navigateByUrl('/orders-page');
    } catch (error) {
      alert(error.message);
    }
  }
}
