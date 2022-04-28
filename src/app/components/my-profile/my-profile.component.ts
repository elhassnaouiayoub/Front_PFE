import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/model/Catalog';
import { CatalogItem } from 'src/app/model/CatalogItem';
import { Users } from 'src/app/model/Users';
import { CatalogService } from 'src/app/services/catalog.service';
import { HttpService } from 'src/app/services/http.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})



export class MyProfileComponent implements OnInit {
  
  catalog!: Catalog;
  catalogItems: CatalogItem[] = [];
  user!: Users;
  backdrop: string = "https://image.tmdb.org/t/p/original";
  poster: string = "https://image.tmdb.org/t/p/original";


  constructor(private sessionService:SessionService, private catalogService:CatalogService, private httpService:HttpService) { }

  ngOnInit(): void {

    let id = this.sessionService.getUserId();

    this.httpService.findById(Number(id)).subscribe(
      (user) => {
        this.user = user;
        this.catalogService.getCatalogById(this.user.id).subscribe(catalog => {
          this.catalog = catalog;
          this.catalogItems = catalog.items;
          console.log(this.catalog);
        });
      }
    );  
  }

  
 

}
