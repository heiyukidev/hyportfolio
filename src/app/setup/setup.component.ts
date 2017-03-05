import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations'

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class SetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
