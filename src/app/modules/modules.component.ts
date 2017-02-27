import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class ModulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
