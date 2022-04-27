import { Injectable } from '@angular/core';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  user: Users = new Users();

  setUser(user: Users) {

    this.user = user;

  }

  getUser(): Users {

    return this.user;

  }
  
}
