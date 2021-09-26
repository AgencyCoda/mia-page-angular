import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, OnInit } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent extends MiaBaseElementComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-text';
    return element;
  }
}
