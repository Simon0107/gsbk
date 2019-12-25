import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd, Router } from '@angular/router';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  colors: any[] = [
    {id: 1, farbe: 'Gruen'},
    {id: 2, farbe: 'Rot'},
    {id: 3, farbe: 'Blau'}
  ];

  viewstate:string='pen';
  constructor(
    public app: AppComponent,
    private router: Router,
  ) {
    this.app.viewState='dashboard';
   }


  ngOnInit() {
  }

  logout() {
    /**
     * navigates back to the login page 
     * sets the viewstate of app.component to login 
     */
    this.app.viewState ='login';
    this.app.inputPw='';
    this.app.inputUsr='';
    this.router.navigate(['/']);
  }


  pen() {
    this.viewstate='pen';
  }
  ind() {
    this.viewstate='ind';
  }
  sch() {
    this.viewstate='sch';
  }

}
