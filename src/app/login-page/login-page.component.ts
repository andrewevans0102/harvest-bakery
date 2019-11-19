import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  // for a list of users, consult local-server/data/users.json
  email = 'HanSolo@gmail.com';
  password = 'password1';
  unsubscribe$ = new Subject();

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        loginResponse => {
          localStorage.setItem('login', JSON.stringify(loginResponse));
          this.router.navigateByUrl('/orders-page');
        },
        error => console.log(error)
      );
  }
}
