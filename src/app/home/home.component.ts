import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
   new WOW().init();
 }
}
