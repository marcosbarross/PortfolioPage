import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private router: Router) {}

  redirectToPortfolio() {
    this.router.navigate(['/projects']);
  }

  redirectToLattes() {
    window.location.href = ' http://lattes.cnpq.br/8477428907185516';
  }

  redirectToLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/lmleao01/';
  }
}
