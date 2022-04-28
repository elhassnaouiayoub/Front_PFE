import { Component, OnInit, Input } from '@angular/core';
import { CatalogItem } from 'src/app/model/CatalogItem';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
    this.backdrop = this.backdrop + this.item.backdrop;
    this.poster = this.poster + this.item.poster;
  }

}
