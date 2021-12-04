import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';
import { ColumnOneComponent } from '../column-one/column-one.component';

@Component({
  selector: 'mia-column-two',
  templateUrl: './column-two.component.html',
  styleUrls: ['./column-two.component.css']
})
export class ColumnTwoComponent extends MiaBaseHasChildElementComponent implements OnInit {

  constructor(
    protected editorService: MiaPageEditorService,
    protected dialog: MatDialog
  ) {
    super(editorService, dialog);
  }

  ngOnInit(): void {
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'column-two';
    element.data = { 
      elements: [
        ColumnOneComponent.createWithChildren(),
        ColumnOneComponent.createWithChildren(),
      ]
    };
    return element;
  }
}