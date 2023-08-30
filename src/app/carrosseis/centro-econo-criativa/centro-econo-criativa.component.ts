import { Component } from '@angular/core';

@Component({
  selector: 'app-centro-econo-criativa',
  templateUrl: './centro-econo-criativa.component.html',
  styleUrls: ['./centro-econo-criativa.component.css']
})
export class CentroEconoCriativaComponent {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/CarouselAssets/CentroEconoCriativa/CentroEcono1.png',
    };
    this.slides[1] = {
      src: './assets/CarouselAssets/CentroEconoCriativa/CentroEcono12.png',
    };
  }
}
