import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropShadow]',
})
export class DropShadowDirective implements OnInit {
  @Input() offsetX = 0;
  @Input() offsetY = 0;
  @Input() blurRadius = 0;
  @Input() color = 'hsl(0 0% 80%)';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style = `
      filter: drop-shadow(
        ${this.offsetX}px 
        ${this.offsetY}px
        ${this.blurRadius}px 
        ${this.color}
      )
    `;
  }
}
