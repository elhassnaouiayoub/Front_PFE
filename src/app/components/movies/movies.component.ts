import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/model/Catalog';
import { CatalogItem } from 'src/app/model/CatalogItem';
import { MovieList } from 'src/app/model/MovieList';
import { MovieSummary } from 'src/app/model/MovieSummary';
import { Users } from 'src/app/model/Users';
import { CatalogService } from 'src/app/services/catalog.service';
import { MovieService } from 'src/app/services/movie.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: MovieSummary[] = [];
  filteredMovies: MovieSummary[] = [];
  movieList!: MovieList;
  user!: Users;
  searchText!: string;

  constructor(private movieService: MovieService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (movieList) => {
        this.movieList = movieList;
        this.movies = movieList.results;
        this.filteredMovies = this.movies;
      }
    );
    
  }

  updateSearch(search: string): void {
    alert(search);
  }

  search(): void {
    this.filteredMovies = this.movies.filter((movie) => movie.title.toLowerCase().includes(this.searchText.toLowerCase()));
    console.log(this.filteredMovies);
  } 

}
