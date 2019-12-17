import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  colors: any[] = [
    {id: 1, farbe: 'Gruen'},
    {id: 2, farbe: 'Rot'},
    {id: 3, farbe: 'Blau'}
  ];

  ngOnInit() {
  }



}
