import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private _regsiterUrl="http://localhost:3000/api/register";
  private _loginUrl="http://localhost:3000/api/login";
  constructor(private http:HttpClient,private _router:Router) { }

  registerUser(user){
    return this.http.post<any>(this._regsiterUrl,JSON.stringify(user),{headers:this.headers})
  }
  
  loginUser(user){
    return this.http.post<any>(this._loginUrl,JSON.stringify(user),{headers:this.headers});
  }
}
