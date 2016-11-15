import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor = 'white';
  @Input('highlightTest') highlightColor = 'green';
  private backgroundColor:string;

  constructor() {}

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log("Event Target" + event.target);
  }






  // constructor(private elementRef:ElementRef, private renderer:Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement,'backgroundColor','green')
  // }

}
