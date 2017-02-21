import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
