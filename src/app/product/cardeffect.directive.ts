import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardeffect]'
})
export class CardeffectDirective {

@HostListener("mouseenter") onmouseEnter(){
  this.elem.nativeElement.style.transform = "scale(1.1)";
  this.elem.nativeElement.style.transition = "all 0.7s";

}

@HostListener("mouseleave") onmouseleave(){
  this.elem.nativeElement.style.transform = "scale(1)"




}

  constructor(private elem:ElementRef) {

   }

}
