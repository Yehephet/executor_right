import {
  AfterContentInit, Component,
  ContentChildren, EventEmitter,
  Input, OnChanges,
  OnInit, Output,
  QueryList, SimpleChanges,
} from '@angular/core';
import {StepDescriptionDirective} from "../step-description.directive";

@Component({
  selector: 'mefdev-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
})

export class StageComponent implements AfterContentInit, OnInit {

  @Input() numberOfSteps: number;
  @Input() currentExecutorStep: number;
  @Input() isRightModal: boolean;

  @Output() emitOutputCountOfSteps: EventEmitter<number> = new EventEmitter<number>();

  @ContentChildren(StepDescriptionDirective) stepDescriptionDirs !: QueryList<StepDescriptionDirective>;
  stepDescriptions: StepDescriptionDirective[] = [];

  get stepsArray(): number[] {
    return [...Array(this.numberOfSteps).keys()].map(i => i + 1);
  }

  ngOnInit(): void {
    this.emitOutputCountOfSteps.emit(this.numberOfSteps);
  }

  ngAfterContentInit(): void {
    this.stepDescriptions = this.stepDescriptionDirs.toArray();
  }

}
