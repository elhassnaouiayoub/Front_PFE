import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie!: Movie;
  backdrop: string = "https://image.tmdb.org/t/p/original/";
  poster: string = "https://image.tmdb.org/t/p/original/";

  constructor(private movieService: MovieService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieById(id).subscribe(
      (movie) => {
        this.movie = movie;
        this.backdrop = this.backdrop + movie.backdrop;
        this.poster = this.poster + movie.poster;
      }
    );
  }

}
