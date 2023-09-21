import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MefDevStepExecutorModule} from "./components/step-executor.module";
import {RightFilterExecutorComponent} from "./components/right-filter-executor/right-filter-executor.component";

@NgModule({
  declarations: [
    AppComponent,
    RightFilterExecutorComponent
  ],
  imports: [
    BrowserModule,
    MefDevStepExecutorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
