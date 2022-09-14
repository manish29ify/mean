import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDir]'
})
export class DirDirective implements OnInit {
  numberOfClicks = 0;
  isBlue = true
  @HostListener('click', ['$event'])
  onClick(btn: any) {
    btn.target.style.color = "white"
    // console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
    this.border = (this.isBlue) ? "2px solid #ff665b" : "2px solid blue"
    btn.target.style.background = (this.isBlue) ? "#1eb1c2" : "#ff86b9"
    this.isBlue = !this.isBlue
  }
  @HostBinding('style.border') border: string | undefined;
  @HostBinding('style.background') bg: string | undefined;
  constructor() { }


  ngOnInit() {
    this.border = "2px solid black"
  }

}
