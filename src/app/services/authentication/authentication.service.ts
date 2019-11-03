import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {}

  async login(email: string, password: string) {
    const response = await axios.get('http://localhost:3000/login');
    return response.data;
  }

  async logout() {
    const response = await axios.get('http://localhost:3000/logout');
    return response.data;
  }
}
