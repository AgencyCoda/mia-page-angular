import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-title-element',
  templateUrl: './title-element.component.html',
  styleUrls: ['./title-element.component.css']
})
export class TitleElementComponent extends MiaBaseElementComponent {

  constructor(
    protected renderer: Renderer2,
    protected elementRef: ElementRef,
  ) {
    super(renderer, elementRef);
  }

}
