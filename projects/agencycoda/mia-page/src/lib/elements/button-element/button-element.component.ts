import { ColorSelectorFieldComponent, MiaField, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.css']
})
export class ButtonElementComponent extends MiaBaseElementComponent implements OnInit {

  typeButton = 'mat-flat-button';
  color = "primary";
  textButton = 'Button Text';
  classButton = '';

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-button';
    element.data = { title: 'Read more' };
    element.editForm = ButtonElementComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_CUSTOM, extra: { component: TabsFieldComponent,
        tabs: [
          { title: 'Content', fields: [
            { key: 'title', type: MiaField.TYPE_STRING, label: 'Text' },
            { key: 'url', type: MiaField.TYPE_STRING, label: 'Url Link' },
            { key: 'color', type: MiaField.TYPE_CUSTOM, label: 'Color Text', extra: { component: ColorSelectorFieldComponent, colors: ['#F8B725', '#0071BD', '#4B9ED6', '#000', '#FFF'] } },
            { key: 'background_color', type: MiaField.TYPE_CUSTOM, label: 'Background Color', extra: { component: ColorSelectorFieldComponent, colors: ['#F8B725', '#0071BD', '#4B9ED6', '#000', '#FFF'] } },
            { key: 'border_color', type: MiaField.TYPE_CUSTOM, label: 'Border Color', extra: { component: ColorSelectorFieldComponent, colors: ['#F8B725', '#0071BD', '#4B9ED6', '#000', '#FFF', 'transparent'] } },
            { key: 'class', type: 'string', label: 'CSS CLASS' }
          ] }
        ]}
      }
    ];
  }
}
