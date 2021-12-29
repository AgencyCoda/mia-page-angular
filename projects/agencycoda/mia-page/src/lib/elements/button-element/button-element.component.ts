import { ColorSelectorFieldComponent, MiaField } from '@agencycoda/mia-form';
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
      { key: 'tabs-one', type: MiaField.TYPE_TABS, extra: {
        tabs: [
          { title: 'Content', fields: [
            { key: 'background_color', type: MiaField.TYPE_CUSTOM, label: 'Background Color', extra: { component: ColorSelectorFieldComponent, colors: ['#F8B725', '#0071BD', '#4B9ED6', '#000', '#FFF'] } },
          ] }
        ]}
      }
    ];
  }
}
