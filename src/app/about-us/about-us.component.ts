import { ViewChild,Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./timeline.css','./about-us.component.css']
})
export class AboutUsComponent implements OnInit,AfterViewInit {
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
   new WOW().init();
 }
}
