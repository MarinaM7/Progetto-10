import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighL]'
})
export class HighLDirective {

  constructor(private el:ElementRef, private render:Renderer2) {
    render.setStyle(el.nativeElement, "backgroundColor","yellow")
  }
}
