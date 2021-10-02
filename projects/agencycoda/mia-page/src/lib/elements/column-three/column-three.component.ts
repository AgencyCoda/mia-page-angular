import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';

@Component({
  selector: 'mia-column-three',
  templateUrl: './column-three.component.html',
  styleUrls: ['./column-three.component.css']
})
export class ColumnThreeComponent extends MiaBaseHasChildElementComponent implements OnInit {

  constructor(
    protected renderer: Renderer2,
    protected elementRef: ElementRef,
    protected editorService: MiaPageEditorService,
  ) {
    super(editorService, renderer, elementRef);
  }

  ngOnInit(): void {
  }


  public static createElement() {
    let element = new MiaElement();
    element.type = 'column-three';
    element.data = { 
      elements: [
        MiaElement.createWithChildren('column-one'),
        MiaElement.createWithChildren('column-one'),
        MiaElement.createWithChildren('column-one'),
      ]
    };
    return element;
  }
}