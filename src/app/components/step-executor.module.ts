import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightExecutorComponent } from './right-executor/right-executor.component';
import { StepDescriptionDirective } from './step-description.directive';
import { StageComponent } from './stage/stage.component';
import { FormsModule } from '@angular/forms';
import {MefdevExecutorPageComponent} from "./mefdev-executor-page/mefdev-executor-page.component";

@NgModule({
    declarations: [
        RightExecutorComponent,
        StageComponent,
        StepDescriptionDirective,
        MefdevExecutorPageComponent
    ],
  exports: [
    RightExecutorComponent,
    StageComponent,
    MefdevExecutorPageComponent,
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})

export class MefDevStepExecutorModule { }
