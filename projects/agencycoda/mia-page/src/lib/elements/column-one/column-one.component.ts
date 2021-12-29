import { MiaField } from '@agencycoda/mia-form';
import { PositionFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';

@Component({
  selector: 'mia-column-one',
  templateUrl: './column-one.component.html',
  styleUrls: ['./column-one.component.scss']
})
export class ColumnOneComponent extends MiaBaseHasChildElementComponent implements OnInit {

  constructor(
    protected editorService: MiaPageEditorService,
    protected dialog: MatDialog
  ) {
    super(editorService, dialog);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'column-one';
    element.data = { elements: new Array<MiaElement>(), margin: { top: 0, right: 0, bottom: 0, left: 0 }, padding: { top: 15, right: 15, bottom: 15, left: 15 } };
    element.editForm = ColumnOneComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_TABS, extra: {
        tabs: [
          { title: 'Design', fields: [
            { key: 'margin_title', type: MiaField.TYPE_LABEL, label: 'Margin', classes: 'label-custom' },
            { key: 'margin', type: MiaField.TYPE_CUSTOM, extra: { component: PositionFieldComponent } },
            { key: 'padding_title', type: MiaField.TYPE_LABEL, label: 'Padding', classes: 'label-custom' },
            { key: 'padding', type: MiaField.TYPE_CUSTOM, extra: { component: PositionFieldComponent } },
          ] }
        ]}
      }
    ];
  }

  public static createWithChildren(): MiaElement {
    let element = new MiaElement();
    element.type = 'column-one';
    element.data = { elements: new Array<MiaElement>(), margin: { top: 0, right: 0, bottom: 0, left: 0 }, padding: { top: 15, right: 15, bottom: 15, left: 15 } };
    element.editForm = ColumnOneComponent.getEditForm();
    return element;
  }
}
