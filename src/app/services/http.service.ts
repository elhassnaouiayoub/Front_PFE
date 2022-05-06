import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoveMovieDto } from '../model/RemoveMovieDto';
import { UserRatingDto } from '../model/UserRatingDto';
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

  public addMovie(userDto: UserRatingDto){
    return this.http.put<Users>(this.url + 'add',userDto);
  }

  public removeMovie(removeMovieDto: RemoveMovieDto) {
    return this.http.put<Users>(this.url + 'remove', removeMovieDto);
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
