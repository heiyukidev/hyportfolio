import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
