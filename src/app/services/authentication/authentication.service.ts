import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(environment.loginRoute, {
      email,
      password
    });
  }

  logout() {
    return this.http.get(environment.logoutRoute);
  }
}
