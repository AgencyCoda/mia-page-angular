import { MiaField, PositionFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';
import { ColumnOneComponent } from '../column-one/column-one.component';

@Component({
  selector: 'lib-column-two-one',
  templateUrl: './column-two-one.component.html',
  styleUrls: ['./column-two-one.component.css']
})
export class ColumnTwoOneComponent extends MiaBaseHasChildElementComponent implements OnInit {

  public static createElement() {
    let element = new MiaElement();
    element.type = 'column-two-one';
    element.editForm = ColumnTwoOneComponent.getEditForm();
    element.data = { 
      full_width: 1,
      elements: [
        ColumnOneComponent.createWithChildren(),
        ColumnOneComponent.createWithChildren(),
      ]
    };
    return element;
  }

  public static getEditForm() {
    return ColumnOneComponent.getEditForm();
  }
}