import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[libLazyCard]'
})
export class LazyCardDirective {

  constructor(private element: ElementRef<HTMLElement>) { }

  get nativeElement(): HTMLElement {
    return this.element.nativeElement;
  }
}
