import { Component, OnInit, Input } from '@angular/core';
import { CatalogItem } from 'src/app/model/CatalogItem';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { RemoveMovieDto } from 'src/app/model/RemoveMovieDto';
import { SessionService } from 'src/app/services/session.service';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-movie-card',
  templateUrl: './profile-movie-card.component.html',
  styleUrls: ['./profile-movie-card.component.css']
})
export class ProfileMovieCardComponent implements OnInit {

  @Input() item!: CatalogItem;
  backdrop: string = "https://image.tmdb.org/t/p/original/";
  poster: string = "https://image.tmdb.org/t/p/original/";
  faStar = faStar;
  removeRatingDto: RemoveMovieDto = new RemoveMovieDto;
  idUser = this.sessionService.getUserId();

  constructor(private sessionService: SessionService, private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.item);
    this.backdrop = this.backdrop + this.item.backdrop;
    this.poster = this.poster + this.item.poster;
  }

  removeMovie(id: string) {
    this.removeRatingDto.movieId = id;
    this.removeRatingDto.userId = this.idUser;
    this.httpService.removeMovie(this.removeRatingDto).subscribe(
      (user) => {
        this.router.navigate(['/myprofile'])
        .then(() => {
          window.location.reload();
        });
      }
    )
  }


  showModal() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeMovie(this.item.id);
      }
    })

  }

}
