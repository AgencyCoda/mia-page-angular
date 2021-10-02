import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-row-element',
  templateUrl: './row-element.component.html',
  styleUrls: ['./row-element.component.css']
})
export class RowElementComponent extends MiaBaseElementComponent {

  constructor(
    protected renderer: Renderer2,
    protected elementRef: ElementRef
  ) {
    super(renderer, elementRef);
  }

}

