import { MiaField, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-true-or-false-element',
  templateUrl: './true-or-false-element.component.html',
  styleUrls: ['./true-or-false-element.component.css']
})
export class TrueOrFalseElementComponent extends MiaBaseElementComponent implements OnInit {

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-true-or-false';
    element.data = { value_correct: 0 };
    element.editForm = TrueOrFalseElementComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_CUSTOM, extra: { component: TabsFieldComponent,
        tabs: [
          { title: 'Content', fields: [
            { key: 'points', type: MiaField.TYPE_STRING, label: 'Points for correct', classes: 'label-custom' },
          ] }
        ]}
      }
    ];
  }
}