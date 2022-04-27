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

  public Login(user: Users){
    return this.http.post<Users>(this.url + 'login',user);
  }

  /*public findById() {
    this.http.get<any>("http://localhost:8084/users/user").subscribe(res => {
      const id = res.find((a:any) => {
        return a.id
      })
    })
  }*/

  public findById(id:number){
    return this.http.get<Users>(this.url + "user/" + id);
  }

}
