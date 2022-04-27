import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/services/http.service';
import { SessionService } from 'src/app/services/session.service';
import { UserRatingDto } from 'src/app/model/UserRatingDto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie!: Movie;
  backdrop: string = "https://image.tmdb.org/t/p/original/";
  poster: string = "https://image.tmdb.org/t/p/original/";
  faStar= faStar;
  userRatingDto: UserRatingDto = new UserRatingDto();
  idUser = this.sessionService.getUser().id;

  constructor(private movieService: MovieService,  private route: ActivatedRoute, private httpService: HttpService,
      private sessionService: SessionService) { }

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

  addMovie(id: string, rating: number) {
    this.userRatingDto.movieId = id;
    //this.userRatingDto.userId = this.idUser;
    this.userRatingDto.userId = "5";
    this.userRatingDto.rating = rating;
    this.httpService.addMovie(this.userRatingDto).subscribe(
      (user) => {
        Swal.fire({
          title: 'Success!',
          text: 'Added Successfully',
          icon: 'success',
          confirmButtonText: 'Close'
        })
      }
    )
  }

  showModal() {
    Swal. fire({
      title: "An input!",
      text: "Write something interesting:",
      input: "text",
      showCancelButton: true
      }).then((result) => {
        if (result.value && Number(result.value <= 10) && Number(result.value) >= 0) {
          this.addMovie(this.movie.movieId, result.value);
        }
        else {
          Swal.fire({
            title: 'Error!',
            text: 'rating needs to be valid',
            confirmButtonText: 'Close'
          })
        }
      })
  }

}
