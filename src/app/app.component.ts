import { Component, OnInit } from '@angular/core';
import { Transform } from 'src/animation/transform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    Transform()
  ]
})
export class AppComponent implements OnInit{
  title = 'animation';

  isOpen: string;

  width = 300;


  ngOnInit() {
    this.isOpen = "open";
  }

  click() {
    this.isOpen = "close";
  }
}
