import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextEditModalComponent } from '../../edits/text-edit-modal/text-edit-modal.component';
import { MiaBaseElementComponent } from '../base-element.component';

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
    element.editComponent = TextEditModalComponent;
    return element;
  }
}
