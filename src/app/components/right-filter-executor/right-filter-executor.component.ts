import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'right-filter-executor',
  templateUrl: './right-filter-executor.component.html',
  styleUrls: ['./right-filter-executor.component.scss']
})
export class RightFilterExecutorComponent implements OnInit {

  public currentStep: number = 1;
  public countSteps: number;

  public stepsContentArr: any[] = [
    {
      title: 'Step 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    //Getting some step contents. I am doing just 2 step as exemple so after clicking the button next, nothing will appear
    //this.stepsContentArr.push();
    this.stepsContentArr.push({
      title: 'Step 2',
      content: 'Lorem ipsum 2 dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
  }

  getCurrentStep(step: number): void {
    this.currentStep = step;
  }

  getCountSteps(count: number): void {
    this.countSteps = count;
  }

}
