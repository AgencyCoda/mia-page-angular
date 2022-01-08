import { MiaField, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.css']
})
export class ImageElementComponent extends MiaBaseElementComponent implements OnInit {

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-image';
    element.editForm = ImageElementComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_CUSTOM, extra: { component: TabsFieldComponent,
        tabs: [
          { title: 'Design', fields: [
            { key: 'width', type: MiaField.TYPE_STRING, label: 'Width', },
            { key: 'height', type: MiaField.TYPE_STRING, label: 'Height' },
          ] },
          { title: 'Content', fields: [
            { key: 'image', type: MiaField.TYPE_FILE_ONE, label: 'Image', classes: 'label-custom' },
            { key: 'caption', type: MiaField.TYPE_TEXT, label: 'Caption' },
          ] }
        ]}
      }
    ];
  }
}