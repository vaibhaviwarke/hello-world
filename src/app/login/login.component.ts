import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={}
  constructor(private myservice:MyserviceService, private router:Router) { }

  ngOnInit() {
   
  }
  loginUser(){
    this.myservice.loginUser(this.loginUserData).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/dashboard'])

        
      },
      err=>{
        console.log(err);
        
      }
    )
  
  }

}
