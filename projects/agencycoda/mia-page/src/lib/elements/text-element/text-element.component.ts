import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';
import { MiaField } from '@agencycoda/mia-form';

@Component({
  selector: 'mia-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent extends MiaBaseElementComponent implements OnInit {

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
    element.type = 'element-text';
    element.editForm = [
      { key: 'tabs-one', type: MiaField.TYPE_TABS, extra: { 
        tabs: [
          { title: 'Content', fields: [
            { key: 'firstname2', type: 'string', label: 'Nombre' },
            { key: 'lastname2', type: 'string', label: 'Apellido' },
          ] },
          { title: 'Design', fields: [
            { key: 'address', type: 'string', label: 'Address' },
            { key: 'testing-two', type: 'string', label: 'Testing Two' },
          ] }
        ]}
      }
    ];
    return element;
  }
}
