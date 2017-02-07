import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  pos: number;
  constructor() {
    this.pos = screen.width + 500;
  }
  /*
  animate() {
    var elem = document.getElementById("giphy");
    elem.style.position = "relative";
    elem.style.left = this.pos + "px";
    this.pos -= 6;
    if (this.pos < -500) {
      this.pos = screen.width + 500;
    }
    setTimeout(()=> {
      this.animate();
    }, 9);
  }*/
  ngOnInit() {
  //  this.animate();
  }

}
