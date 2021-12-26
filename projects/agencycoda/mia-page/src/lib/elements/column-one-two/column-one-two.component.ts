import { MiaField, PositionFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';
import { ColumnOneComponent } from '../column-one/column-one.component';

@Component({
  selector: 'mia-column-one-two',
  templateUrl: './column-one-two.component.html',
  styleUrls: ['./column-one-two.component.css']
})
export class ColumnOneTwoComponent extends MiaBaseHasChildElementComponent implements OnInit {

  public static createElement() {
    let element = new MiaElement();
    element.type = 'column-one-two';
    element.editForm = ColumnOneTwoComponent.getEditForm();
    element.data = { 
      elements: [
        ColumnOneComponent.createWithChildren(),
        ColumnOneComponent.createWithChildren(),
      ]
    };
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_TABS, extra: { 
        tabs: [
          { title: 'Design', fields: [
            { key: 'min_height', type: MiaField.TYPE_STRING, label: 'Min Height', classes: 'label-custom' },
            { key: 'margin_title', type: MiaField.TYPE_LABEL, label: 'Margin', classes: 'label-custom' },
            { key: 'margin', type: MiaField.TYPE_CUSTOM, extra: { component: PositionFieldComponent } },
            { key: 'padding_title', type: MiaField.TYPE_LABEL, label: 'Padding', classes: 'label-custom' },
            { key: 'padding', type: MiaField.TYPE_CUSTOM, extra: { component: PositionFieldComponent } },
          ] },
          { title: 'Content', fields: [
            { key: 'background_image', type: MiaField.TYPE_FILE_ONE, label: 'Background Image', classes: 'label-custom' },
          ] }
        ]}
      }
    ];
  }
}