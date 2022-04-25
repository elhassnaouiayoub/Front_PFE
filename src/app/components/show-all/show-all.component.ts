import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/Users';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup,FormControl ,FormBuilder} from '@angular/forms';

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


  constructor(private httpService:HttpService, private fb: FormBuilder) { }


  ngOnInit(): void {

    this.httpService.fetchAllUsers().subscribe(user => this.listOfUsers=user) 

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
