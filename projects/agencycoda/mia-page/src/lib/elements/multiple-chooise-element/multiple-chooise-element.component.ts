import { MiaField, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-multiple-chooise-element',
  templateUrl: './multiple-chooise-element.component.html',
  styleUrls: ['./multiple-chooise-element.component.css']
})
export class MultipleChooiseElementComponent extends MiaBaseElementComponent implements OnInit {

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  onClickAddOption() {
    this.element.data.options.push({ title: '', is_correct: false });
  }

  onClickRemoveOption(option: any) {
    let index = this.element.data.options.indexOf(option);
    if(index >= 0){
      this.element.data.options.splice(index, 1);
    }
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-multiple-choice';
    element.data = { options: [
      { title: 'Option 1', is_correct: false }
    ], points: 0 };
    element.editForm = MultipleChooiseElementComponent.getEditForm();
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