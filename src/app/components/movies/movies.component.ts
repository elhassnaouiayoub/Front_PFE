import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { MovieList } from 'src/app/model/MovieList';
import { MovieSummary } from 'src/app/model/MovieSummary';
import { Users } from 'src/app/model/Users';
import { MovieService } from 'src/app/services/movie.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: MovieSummary[] = [];
  movieList!: MovieList;
  user!: Users;

  constructor(private movieService: MovieService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (movieList) => {
        this.movieList = movieList;
        this.movies = movieList.results;
      }
    );
    this.user = this.sessionService.getUser();
  }

}
