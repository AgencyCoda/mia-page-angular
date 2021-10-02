import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';
import { MiaBaseElementComponent } from '../base-element.component';
import { MiaBaseHasChildElementComponent } from '../base-has-child-element.component';

@Component({
  selector: 'mia-column-one',
  templateUrl: './column-one.component.html',
  styleUrls: ['./column-one.component.css']
})
export class ColumnOneComponent extends MiaBaseHasChildElementComponent implements OnInit {

  constructor(
    protected renderer: Renderer2,
    protected elementRef: ElementRef,
    protected editorService: MiaPageEditorService
  ) {
    super(editorService, renderer, elementRef);
  }

  ngOnInit(): void {
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'column-one';
    element.data = { elements: new Array<MiaElement>() };
    return element;
  }
}
