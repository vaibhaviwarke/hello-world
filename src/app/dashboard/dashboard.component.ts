import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser = null
  campaignChartData: any
  welComeMsg = ''
  constructor(
  ) { }
  ngOnInit() {
    // this.currentUser = this._auth.loggedIn();
    this._initCampaignChart()
     this._setWelcomeMsg()
  }

  _setWelcomeMsg() {
    let time = new Date();
    let hour = time.getHours()
    let label = ''
    if(hour >= 0 && hour < 12) {
      label = 'Good Morning'
    } else if(hour >= 12 && hour < 18) {
      label = 'Good Afternoon'
    } else if(hour >= 18 && hour < 24) {
      label = 'Good Evening'
    }
    this.welComeMsg = label + ' ' + this.currentUser.firstName + '...'
  }

  _initCampaignChart() {
    this.campaignChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Completed Campaigns',
          backgroundColor: '#00a7d0',
          borderColor: '#088cad',
          data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        }
      ]
    }
  }


}
