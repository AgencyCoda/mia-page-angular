import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-map-element',
  templateUrl: './map-element.component.html',
  styleUrls: ['./map-element.component.css']
})
export class MapElementComponent extends MiaBaseElementComponent implements OnInit {

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
    element.type = 'element-map';
    return element;
  }
}