import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string='http://localhost:8084/users/';

  constructor(private http:HttpClient) {}

    public fetchAllUsers(): Observable<Users[]> {

      return this.http.get<Users[]>(this.url);

  }
  
  public addUser(user: Users){
    return this.http.post<Users>(this.url + 'register',user);
  }

  public findById(id:number){
    return this.http.get<Users>(this.url + "url" + id);
  }

  public update(id:number, user:Users){
    return this.http.put<Users>(this.url + "add", user);
  }

}
