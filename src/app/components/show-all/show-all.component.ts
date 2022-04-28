import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup,FormControl ,FormBuilder} from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { Users } from 'src/app/model/Users';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

   //listOfUsers: Users[] | undefined;

   listOfUsers:any;
   userForm!: FormGroup;
   show=false;
   user!: Users;

  constructor(private httpService:HttpService, private fb: FormBuilder, private sessionService: SessionService) { }


  ngOnInit(): void {

    this.httpService.fetchAllUsers().subscribe(user => this.listOfUsers=user) 

    //this.user = this.sessionService.getUser();
    
    this.userForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    });
  }

  handleSubmit() {
    this.httpService.addUser(this.userForm.value).subscribe();
    this.ngOnInit();
  }


  showAddUser(){
    this.show = !this.show;
  }
}
