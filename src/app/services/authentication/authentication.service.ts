import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {}

  async login(email: string, password: string) {
    try {
      const response = await axios.post(environment.loginRoute, {
        email,
        password
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    const response = await axios.get(environment.logoutRoute);
    return response.data;
  }
}
