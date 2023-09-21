import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[StepDescription]'
})
export class StepDescriptionDirective{

  @Input() StepDescription: number = 0;

  constructor(public templateRef: TemplateRef<number>) { }
}
