import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: Array<{
    header: string;
    desc: string;
    url: string;
    alt: string;
  }>;

  constructor() {
    this.slides = [
      {
        header: 'Rukmani music',
        desc: 'Music for all',
        url: '/assets/rukmani/rukk1.jpg',
        alt: 'Music'
      },
      {
        header: 'Rukmani music',
        desc: 'Music for all',
        url: '/assets/rukmani/rukk2.jpg',
        alt: 'Music'
      }
    ]
  }

  ngOnInit() {
  }

}
