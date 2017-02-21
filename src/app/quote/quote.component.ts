import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }
quotes:string[] = [
"Me?! Smart?!... Nah i'm just an idiot who works hard...",
"Just shut up and work...",
"No one did it before?! Great I'll do it first!"
]
quote:string;
  ngOnInit() {
    this.quote = this.quotes[Math.floor((Math.random() * this.quotes.length))];
  }

}
