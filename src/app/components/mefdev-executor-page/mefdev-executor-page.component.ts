import {Component, Input} from '@angular/core';

@Component({
  selector: 'mefdev-executor-page',
  templateUrl: './mefdev-executor-page.component.html',
  styleUrls: ['./mefdev-executor-page.component.scss']
})
export class MefdevExecutorPageComponent {

  @Input() stepContent !: { title: string, content: string};
  constructor(){}

}
