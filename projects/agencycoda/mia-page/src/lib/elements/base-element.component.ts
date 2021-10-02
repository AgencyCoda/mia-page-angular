import { MiaElement } from "@agencycoda/mia-page-core";
import { ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MiaElementActionsComponent } from "../components/mia-element-actions/mia-element-actions.component";
import { MiaEditorElement } from "../entities/mia-editor-element";

@Component({
    selector: 'mia-base-element',
    template: ''
})
export class MiaBaseElementComponent implements OnInit {

  @Input() element!: MiaElement;
  @Input() editor!: MiaEditorElement;

  @Output() clickElement = new EventEmitter<MiaElement>();
  @Output() clickRemove = new EventEmitter<MiaElement>();

  constructor(
    protected dialog: MatDialog
  ) {
        
  }

  ngOnInit(): void {
        
  }

  onClickEdit() {
    if(this.element.editComponent == undefined){
      return;
    }
    
    this.dialog.open(this.element.editComponent, {
      data: this.element
    })
  }

  onClickElement(element: MiaElement) {
    this.clickElement.emit(element);
  }

  onClickRemove() {
    this.clickRemove.emit(this.element);
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    this.clickElement.emit(this.element);
    e.stopPropagation();
  }

  public static createElement() {
    let element = new MiaElement();
    return element;
  }
}
