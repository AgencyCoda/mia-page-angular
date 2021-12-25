import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-carousel-element',
  templateUrl: './carousel-element.component.html',
  styleUrls: ['./carousel-element.component.css']
})
export class CarouselElementComponent extends MiaBaseElementComponent implements OnInit {

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-carousel';
    return element;
  }
}
