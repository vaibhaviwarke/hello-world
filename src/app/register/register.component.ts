import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerUserData={}
  constructor(private myservice:MyserviceService, private router:Router) { }

  ngOnInit() {
  }
  registerUser(){
    this.myservice.registerUser(this.registerUserData).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/login']);
        
      },
      err=>{
        console.log(err);
        
      }
      
    )

    console.log(this.registerUserData);
    
  }
}
