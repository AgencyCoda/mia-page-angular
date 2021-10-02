import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';

@Component({
  selector: 'mia-column-one-two',
  templateUrl: './column-one-two.component.html',
  styleUrls: ['./column-one-two.component.css']
})
export class ColumnOneTwoComponent extends MiaBaseHasChildElementComponent implements OnInit {

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
    element.type = 'column-one-two';
    element.data = { 
      elements: [
        MiaElement.createWithChildren('column-one'),
        MiaElement.createWithChildren('column-one'),
      ]
    };
    return element;
  }
}