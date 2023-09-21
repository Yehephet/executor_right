import {
  AfterViewInit,
  Component,
  ContentChild,
  Output,
  TemplateRef,
  EventEmitter, Input, OnInit
} from '@angular/core';

@Component({
    selector: 'mefdev-right-executor',
    templateUrl: './right-executor.component.html',
    styleUrls: ['./right-executor.component.scss'],
})

export class RightExecutorComponent {

  public currentExecutorStep: number = 1;
  @Output() emitCurrentStep: EventEmitter<number> = new EventEmitter<number>();

  @Input() countOfSteps: number;
  @Output() emitCountSteps: EventEmitter<number> = new EventEmitter<number>();

  public changeCurrentStep(direction: string): void {
    if (direction === 'back' && this.currentExecutorStep > 1) {
      this.currentExecutorStep--;
    } else if (direction === 'forward' && this.currentExecutorStep < this.countOfSteps) {
      this.currentExecutorStep++;
    }
    console.log(this.currentExecutorStep, 'current step right executor component');
    this.emitCurrentStep.emit(this.currentExecutorStep);
  }

}
