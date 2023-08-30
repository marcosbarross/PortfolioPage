import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rep-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/CarouselAssets/republica/republica1.png',
    };
    this.slides[1] = {
      src: './assets/CarouselAssets/republica/republica2.png',
    }
    this.slides[2] = {
      src: './assets/CarouselAssets/republica/republica3.png',
    }
  }
}