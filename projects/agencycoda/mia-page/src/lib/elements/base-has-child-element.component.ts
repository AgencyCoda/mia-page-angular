import { MiaElement } from "@agencycoda/mia-page-core";
import { ElementRef, Input, Renderer2 } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MiaEditorElement } from "../entities/mia-editor-element";
import { MiaPageEditorService } from "../services/mia-page-editor.service";
import { MiaBaseElementComponent } from "./base-element.component";

@Component({
    selector: 'mia-base-element',
    template: ''
})
export class MiaBaseHasChildElementComponent extends MiaBaseElementComponent implements OnInit {

  constructor(
    protected editorService: MiaPageEditorService
  ) {
    super();
  }
    
  onClickAddElement(element: MiaElement) {
    this.editorService
    .showAddElementModal()
    .subscribe(ele => element.data.elements.push(ele));
  }

  onClickRemoveChild(element: MiaElement) {
    let index = this.element.data.elements.indexOf(element);
    if(index >= 0){
      this.element.data.elements.splice(index, 1);
    }
  }
}
