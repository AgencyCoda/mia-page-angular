import { MiaField, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';
import { WordDialogComponent } from './word-dialog/word-dialog.component';

@Component({
  selector: 'lib-fill-blanks-element',
  templateUrl: './fill-blanks-element.component.html',
  styleUrls: ['./fill-blanks-element.component.css']
})
export class FillBlanksElementComponent extends MiaBaseElementComponent implements OnInit {

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  /*onClickAddText() {
    this.element.data.values.push({ type: 0, text: '' });
  }*/

  onClickAddBlank() {
    this.dialog.open(WordDialogComponent)
    .afterClosed()
    .subscribe(res => {
      if(res == undefined){
        return;
      }

      this.element.data.content += '<span class="word" contenteditable="false">' + res + '</span>';
    });
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-fill-blanks';
    element.data = { values: [], show_replies: false, content: '' };
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