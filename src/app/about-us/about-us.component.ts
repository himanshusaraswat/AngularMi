import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
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
   $(".owl-carousel").owlCarousel({
     autoplay: 3000,
     items: 3,
     itemsDesktop: [1199, 3],
     itemsDesktopSmall: [979, 3],
   });
 }
}
