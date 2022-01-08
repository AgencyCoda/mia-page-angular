import { ColorSelectorFieldComponent, MiaField, SwitchFieldComponent, TabsFieldComponent } from '@agencycoda/mia-form';
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

  public static createElement() {
    let element = new MiaElement();
    element.type = 'column-one';
    element.data = { elements: new Array<MiaElement>(), margin: { top: 0, right: 0, bottom: 0, left: 0 }, padding: { top: 15, right: 15, bottom: 15, left: 15 }, full_width: 1 };
    element.editForm = ColumnOneComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_CUSTOM, extra: { component: TabsFieldComponent,
        tabs: [
          { title: 'Design', fields: [
            { key: 'full_width', type: MiaField.TYPE_CUSTOM, label: 'Full Width', extra: { component: SwitchFieldComponent } },
            { key: 'min_height', type: MiaField.TYPE_STRING, label: 'Min Height', classes: 'label-custom' },
            { key: 'margin_title', type: MiaField.TYPE_LABEL, label: 'Margin', classes: 'label-custom' },
            { key: 'margin', type: MiaField.TYPE_CUSTOM, extra: { component: PositionFieldComponent } },
            { key: 'padding_title', type: MiaField.TYPE_LABEL, label: 'Padding', classes: 'label-custom' },
            { key: 'padding', type: MiaField.TYPE_CUSTOM, extra: { component: PositionFieldComponent } },
            { key: 'border_radius', type: MiaField.TYPE_STRING, label: 'Border Radius', classes: 'label-custom' },
          ] },
          { title: 'Content', fields: [
            { key: 'background_color', type: MiaField.TYPE_CUSTOM, label: 'Background Color', extra: { component: ColorSelectorFieldComponent, colors: ['#000', '#333', '#eee', '#ddd'] } },
            { key: 'background_image', type: MiaField.TYPE_FILE_ONE, label: 'Background Image', classes: 'label-custom' },
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
