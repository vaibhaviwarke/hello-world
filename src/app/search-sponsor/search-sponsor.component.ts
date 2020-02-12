import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-sponsor',
  templateUrl: './search-sponsor.component.html',
  styleUrls: ['./search-sponsor.component.css']
})
export class SearchSponsorComponent implements OnInit {
  searchsonsorUserData={}
  constructor(private myservice:MyserviceService, private router:Router) { }

  ngOnInit() {
  }
  searchSponsor(){
    this.myservice.getUser().subscribe(
      res=>{
        console.log(res);
        // this.router.navigate(['/dashboard'])
      },
      err=>{
        console.log(err);
      }
    )
  }

}