import { Component, OnInit } from '@angular/core';
import { MiaBaseViewComponent } from '../base-view.component';

@Component({
  selector: 'lib-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.css']
})
export class TextViewComponent extends MiaBaseViewComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
