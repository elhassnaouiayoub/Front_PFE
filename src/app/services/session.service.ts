import { Injectable } from '@angular/core';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  static user: Users = new Users();

  setUser(user: Users) {
    SessionService.user = user;
  }

  getUser(): Users {

    return SessionService.user;

  }
  
}
