import { MiaField, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-fill-blanks-element',
  templateUrl: './fill-blanks-element.component.html',
  styleUrls: ['./fill-blanks-element.component.css']
})
export class FillBlanksElementComponent extends MiaBaseElementComponent implements OnInit {

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  onClickAddText() {
    this.element.data.values.push({ type: 0, text: '' });
  }

  onClickAddBlank() {
    this.element.data.values.push({ type: 1, word: '', points: 0 });
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-fill-blanks';
    element.data = { values: [], show_replies: false };
    element.editForm = FillBlanksElementComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_CUSTOM, extra: { component: TabsFieldComponent,
        tabs: [
          { title: 'Content', fields: [
            //{ key: 'points', type: MiaField.TYPE_STRING, label: 'Points for correct', classes: 'label-custom' },
          ] }
        ]}
      }
    ];
  }
}