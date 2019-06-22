import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libLazyCard]'
})
export class CardTemplateDirective {

  constructor(public tmpl: TemplateRef<any>) { }

}
