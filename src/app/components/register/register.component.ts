import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
userForm !: FormGroup; 


 constructor(private httpService:HttpService, private fb: FormBuilder, private router:Router,private http:HttpClient) { }


 ngOnInit(): void {

  this.userForm = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
    confirmpassword: [''],
  });
  
 }

 handleSubmit() {
   if(this.userForm.value.password == this.userForm.value.confirmpassword &&
    this.userForm.value.username != "" && this.userForm.value.email != "" && this.userForm.value.password != ""){
   this.httpService.addUser(this.userForm.value).subscribe(res => {
     alert("Signup Successfull");
     this.userForm.reset();
     this.router.navigate(['login']);
   }
   )
 }}
     
}
