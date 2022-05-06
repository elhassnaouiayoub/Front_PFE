import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/Users';
import { HttpService } from 'src/app/services/http.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  
  user!: Users;

  constructor(private sessionService: SessionService, private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    let id = this.sessionService.getUserId();

    this.httpService.findById(Number(id)).subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  logout(): void {
    //this.sessionService.setUser(new Users());
    this.router.navigate(['/']);
  }

}
