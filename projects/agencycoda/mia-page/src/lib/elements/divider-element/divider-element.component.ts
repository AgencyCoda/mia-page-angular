import { ColorSelectorFieldComponent, MiaField } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-divider-element',
  templateUrl: './divider-element.component.html',
  styleUrls: ['./divider-element.component.css']
})
export class DividerElementComponent extends MiaBaseElementComponent implements OnInit {

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-divider';
    element.editForm = DividerElementComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_TABS, extra: {
        tabs: [
          { title: 'Content', fields: [
            { key: 'title', type: MiaField.TYPE_STRING, label: 'Text' },
            { key: 'color', type: MiaField.TYPE_CUSTOM, label: 'Color Text', extra: { component: ColorSelectorFieldComponent, colors: ['#F8B725', '#0071BD', '#4B9ED6', '#000', '#FFF'] } },
            { key: 'background_color', type: MiaField.TYPE_CUSTOM, label: 'Background Color', extra: { component: ColorSelectorFieldComponent, colors: ['#F8B725', '#0071BD', '#4B9ED6', '#000', '#FFF'] } },
            { key: 'class', type: 'string', label: 'CSS CLASS' }
          ] }
        ]}
      }
    ];
  }
}
