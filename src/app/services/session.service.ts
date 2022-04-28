import { Injectable } from '@angular/core';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  static user: Users = new Users();

  setUser(user: Users) {
    localStorage.setItem('userId', user.id);
  }

  getUserId(): string {
    return JSON.parse(localStorage.getItem('userId') || '{}');
  }
  
}
