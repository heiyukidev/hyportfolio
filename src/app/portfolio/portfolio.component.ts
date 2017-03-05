import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}