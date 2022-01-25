import { MiaField, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-space-element',
  templateUrl: './space-element.component.html',
  styleUrls: ['./space-element.component.css']
})
export class SpaceElementComponent extends MiaBaseElementComponent implements OnInit {

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-space';
    element.data = { height: '100' };
    element.editForm = SpaceElementComponent.getEditForm();
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
        ]}
      }
    ];
  }
}
