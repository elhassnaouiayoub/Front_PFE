import { Component, OnInit, Input } from '@angular/core';
import { MovieSummary } from 'src/app/model/MovieSummary';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie!: MovieSummary;
  faStar = faStar;
  pic: string = "";

  constructor() { }

  ngOnInit(): void {
    this.pic = "https://image.tmdb.org/t/p/original/" + this.movie.backdrop_path;
  }

  setDefaultPic() {
    this.pic = "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s101-td-008_4.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e8c5e8e59d454378ea3702a842a80c01";
  }

}
