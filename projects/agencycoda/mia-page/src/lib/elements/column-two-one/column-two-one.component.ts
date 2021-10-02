import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';

@Component({
  selector: 'lib-column-two-one',
  templateUrl: './column-two-one.component.html',
  styleUrls: ['./column-two-one.component.css']
})
export class ColumnTwoOneComponent extends MiaBaseHasChildElementComponent implements OnInit {

  constructor(
    protected renderer: Renderer2,
    protected elementRef: ElementRef,
    protected editorService: MiaPageEditorService
  ) {
    super(editorService, renderer, elementRef);
  }

  ngOnInit(): void {
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'column-two-one';
    element.data = { 
      elements: [
        MiaElement.createWithChildren('column-one'),
        MiaElement.createWithChildren('column-one'),
      ]
    };
    return element;
  }
}