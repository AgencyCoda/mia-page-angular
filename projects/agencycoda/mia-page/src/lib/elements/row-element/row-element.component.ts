import { Component, OnInit } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-row-element',
  templateUrl: './row-element.component.html',
  styleUrls: ['./row-element.component.css']
})
export class RowElementComponent extends MiaBaseElementComponent {

  constructor() {
    super();
  }

}

