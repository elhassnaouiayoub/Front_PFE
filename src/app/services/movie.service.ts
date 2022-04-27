import { Injectable } from '@angular/core';
import { Movie } from '../model/Movie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieList } from '../model/MovieList';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:8082/movies/';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieList> {
    return this.http.get<MovieList>(this.apiUrl);
  }

  getMovieById(id: string): Observable<Movie> {
    const URL = `${this.apiUrl}/${id}`;
    return this.http.get<Movie>(URL);
  }

}
