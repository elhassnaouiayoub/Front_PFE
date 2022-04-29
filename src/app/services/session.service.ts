import { Injectable } from '@angular/core';
import { Users } from '../model/Users';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpService: HttpService) { }

  static user: Users = new Users();

  setUser(user: Users) {
    localStorage.setItem('userId', user.id);
  }

  getUserId(): string {
    return JSON.parse(localStorage.getItem('userId') || '{}');
  }
  
}
