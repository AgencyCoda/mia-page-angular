import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.css']
})
export class ButtonElementComponent extends MiaBaseElementComponent implements OnInit {

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
    element.type = 'element-button';
    return element;
  }
}