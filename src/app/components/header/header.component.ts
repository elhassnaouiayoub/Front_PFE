import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faFilm = faFilm;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}