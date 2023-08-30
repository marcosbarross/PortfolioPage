import { Component } from '@angular/core';

@Component({
  selector: 'app-pavilhao-canada',
  templateUrl: './pavilhao-canada.component.html',
  styleUrls: ['./pavilhao-canada.component.css']
})
export class PavilhaoCanadaComponent {
  slides: any[] = new Array(2).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/CarouselAssets/pavilhaoCanada/pavilhao1.png',
    };
    this.slides[1] = {
      src: './assets/CarouselAssets/pavilhaoCanada/pavilhao2.png',
    }
  }
}
