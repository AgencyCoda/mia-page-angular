import { MiaField, SwitchFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-code-element',
  templateUrl: './code-element.component.html',
  styleUrls: ['./code-element.component.css']
})
export class CodeElementComponent extends MiaBaseElementComponent implements OnInit {

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  constructor(
    protected dialog: MatDialog
  ) {
    super(dialog);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-code';
    element.data = {};
    element.editForm = CodeElementComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_TABS, extra: { 
        tabs: [
          { title: 'Content', fields: [
            { key: 'mode', type: MiaField.TYPE_SELECT, label: 'Mode', extra: {
              options: [
                { id: 0, title: 'HTML' },
                { id: 1, title: 'CSS' },
                { id: 2, title: 'Javascript' },
                { id: 3, title: 'Plain Text' },
              ],
            }},
            { key: 'display', type: MiaField.TYPE_CUSTOM, label: 'Display Source code', extra: { component: SwitchFieldComponent } },
            { key: 'content', type: MiaField.TYPE_TEXT, label: '', placeholder: 'Add code...', },
          ] }
        ]}
      }
    ];
  }
}