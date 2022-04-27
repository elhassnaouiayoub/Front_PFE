import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  
  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, private http: HttpClient,
    private sessionService: SessionService) { }

  ngOnInit(): void {


    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });

  }

  login() {
    this.httpService.Login(this.loginForm.value).subscribe(res => {
      if (res !== null) {
        alert("Login Successfull");
        this.loginForm.reset();
        this.sessionService.setUser(res);
        this.router.navigate(['user']);

      } else {
        alert("Username Or Password invalid!!")
        this.loginForm.reset();
      }

    }
    )
  }

}
