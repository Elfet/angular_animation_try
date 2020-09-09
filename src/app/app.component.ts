import { Component, OnInit } from '@angular/core';
import { Transform } from 'src/animation/transform';
import { DomSanitizer } from '@angular/platform-browser';

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

  width = 10;

  constructor(private sanitizer: DomSanitizer) {}


  ngOnInit() {
    this.isOpen = "open";
  }

  click() {
    this.isOpen = "close";
  }

//   @Component({ /*…*/ })
// export class MyComponent {

//   @HostBinding("attr.style")
//   public get valueAsStyle(): any {
//     return this.sanitizer.bypassSecurityTrustStyle(`--some-var: ${value}`);
//   }

//   constructor(private sanitizer: DomSanitizer) {}

// }
// ----------------------------------------
// <div [style]="color">...</div>
// color = this.sanitizer.bypassSecurityTrustStyle('--someKey: ' + someVariable);
// ---------------------------------------------
// @HostBind('style.--custom-proproty')
}
