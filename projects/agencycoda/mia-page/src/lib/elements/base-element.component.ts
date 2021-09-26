import { MiaElement } from "@agencycoda/mia-page-core";
import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MiaEditorElement } from "../entities/mia-editor-element";

@Component({
    selector: 'mia-base-element',
    template: ''
})
export class MiaBaseElementComponent implements OnInit {

  @Input() element!: MiaElement;
  @Input() editor!: MiaEditorElement;

  constructor() {
        
  }

  ngOnInit(): void {
        
  }

  public static createElement() {
    let element = new MiaElement();
    return element;
  }
}
