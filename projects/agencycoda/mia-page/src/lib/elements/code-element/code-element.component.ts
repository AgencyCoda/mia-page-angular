import { MiaField, SwitchFieldComponent, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-code-element',
  templateUrl: './code-element.component.html',
  styleUrls: ['./code-element.component.css']
})
export class CodeElementComponent extends MiaBaseElementComponent implements OnInit {

  constructor(
    protected dialog: MatDialog,
    protected editorService: MiaPageEditorService,
    protected sanitizer: DomSanitizer
  ) {
    super(dialog, editorService);
  }

  safeHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.element.data.content);
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-code';
    element.data = { content: '<h2>Code empty</h2>' };
    element.editForm = CodeElementComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_CUSTOM, extra: { component: TabsFieldComponent,
        tabs: [
          { title: 'Content', fields: [
            /*{ key: 'mode', type: MiaField.TYPE_SELECT, label: 'Mode', extra: {
              options: [
                { id: 0, title: 'HTML' },
                { id: 1, title: 'CSS' },
                { id: 2, title: 'Javascript' },
                { id: 3, title: 'Plain Text' },
              ],
            }},
            { key: 'display', type: MiaField.TYPE_CUSTOM, label: 'Display Source code', extra: { component: SwitchFieldComponent } },*/
            { key: 'content', type: MiaField.TYPE_TEXT, label: '', placeholder: 'Add code...', },
          ] }
        ]}
      }
    ];
  }
}