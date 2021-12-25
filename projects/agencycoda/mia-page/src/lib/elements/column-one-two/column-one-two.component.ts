import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';
import { ColumnOneComponent } from '../column-one/column-one.component';

@Component({
  selector: 'mia-column-one-two',
  templateUrl: './column-one-two.component.html',
  styleUrls: ['./column-one-two.component.css']
})
export class ColumnOneTwoComponent extends MiaBaseHasChildElementComponent implements OnInit {

  public static createElement() {
    let element = new MiaElement();
    element.type = 'column-one-two';
    element.data = { 
      elements: [
        ColumnOneComponent.createWithChildren(),
        ColumnOneComponent.createWithChildren(),
      ]
    };
    return element;
  }
}