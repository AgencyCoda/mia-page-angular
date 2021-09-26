import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, OnInit } from '@angular/core';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';

@Component({
  selector: 'lib-column-three',
  templateUrl: './column-three.component.html',
  styleUrls: ['./column-three.component.css']
})
export class ColumnThreeComponent extends MiaBaseHasChildElementComponent implements OnInit {

  constructor(
    protected editorService: MiaPageEditorService
  ) {
    super(editorService);
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