import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-title-element',
  templateUrl: './title-element.component.html',
  styleUrls: ['./title-element.component.css']
})
export class TitleElementComponent extends MiaBaseElementComponent {

  constructor(
    protected dialog: MatDialog
  ) {
    super(dialog);
  }

}
