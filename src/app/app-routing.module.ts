import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchSponsorComponent } from './search-sponsor/search-sponsor.component';


const routes: Routes = [
  {
    path :'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path: 'searchSponsor', component:SearchSponsorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
