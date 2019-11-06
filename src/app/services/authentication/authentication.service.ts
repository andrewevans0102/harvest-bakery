import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {}

  async login(email: string, password: string) {
    const response = await axios.post(environment.loginRoute, {
      email,
      password
    });
    return response.data;
  }

  async logout() {
    const response = await axios.get(environment.logoutRoute);
    return response.data;
  }
}
