import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[toggleShow]'
})
export class ToggleShowDirective {

  constructor( el: ElementRef) {
    el.nativeElement.style.backgroundColor ='yellow';
   }

  @HostListener('mouseenter') onMouseEnter(){

  }

}
