import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  OnMounseEnter(){
    this.renderer.addClass(this.element.nativeElement, 'ekart--product--item--hover');
  }
  @HostListener('mouseout')
  OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement, 'ekart--product--item--hover');
  }
}
