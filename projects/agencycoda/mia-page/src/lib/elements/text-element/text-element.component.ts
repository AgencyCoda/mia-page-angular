import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent extends MiaBaseElementComponent implements OnInit {

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  constructor(
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-text';
    return element;
  }
}
