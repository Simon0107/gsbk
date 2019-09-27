import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  text = 'Durch Klicken auf den Button kommen Sie auf die Haupseite der Anwendung';
  constructor() { }

  ngOnInit() {
  }


}
