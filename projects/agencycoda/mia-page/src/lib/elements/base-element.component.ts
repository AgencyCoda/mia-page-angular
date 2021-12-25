import { MiaElement, MiaPage } from "@agencycoda/mia-page-core";
import { ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MiaElementActionsComponent } from "../components/mia-element-actions/mia-element-actions.component";
import { MiaEditorElement } from "../entities/mia-editor-element";
import { MiaField, MiaFormConfig, MiaFormModalComponent, MiaFormModalConfig } from '@agencycoda/mia-form';
import { MiaPageEditorService } from "../services/mia-page-editor.service";

@Component({
    selector: 'mia-base-element',
    template: ''
})
export class MiaBaseElementComponent implements OnInit {

  @Input() page!: MiaPage;
  @Input() element!: MiaElement;
  @Input() parent?: MiaElement;
  @Input() editor!: MiaEditorElement;

  @Output() clickElement = new EventEmitter<MiaElement>();
  @Output() clickRemove = new EventEmitter<MiaElement>();

  constructor(
    protected dialog: MatDialog,
    protected editorService: MiaPageEditorService
  ) {
        
  }

  ngOnInit(): void {
        
  }

  onClickEdit() {
    if(this.element.editForm == undefined){
      return;
    }

    let data = new MiaFormModalConfig();
    data.item = this.element.data;
    data.titleNew = 'Settings';
    data.titleEdit = 'Settings';
    data.showButtons = false;
    data.showHeader = false;

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = this.element.editForm;
    config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' }
    ];

    data.config = config;

    return this.dialog.open(MiaFormModalComponent, {
      width: '500px',
      panelClass: 'modal-full-width-mobile',
      data: data
    }).afterClosed().subscribe(res => {
      this.element.isSelected = false;
    });
  }

  onClickElement(element: MiaElement) {
    this.clickElement.emit(element);
  }

  onClickRemove() {
    this.clickRemove.emit(this.element);
  }

  onClickDuplicate() {
    this.editorService.duplicateElement(this.element, this.parent, this.page);
  }

  onClickMoveUp() {
    this.editorService.moveUpElement(this.element, this.parent, this.page);
  }

  onClickMoveDown() {
    this.editorService.moveDownElement(this.element, this.parent, this.page);
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

  public static getEditForm(): Array<any> {
    return [];
  }
}
