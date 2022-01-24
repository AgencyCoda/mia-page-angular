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

  cssStyleMain: any = {};

  constructor(
    protected dialog: MatDialog,
    protected editorService: MiaPageEditorService
  ) {
        
  }

  ngOnInit(): void {
      this.onInitCss();
  }

  /** CSS Methods */
  addCssProperty(key: string, value: any) {
    this.cssStyleMain[key] = value;
  }

  onInitCss() {
    // Reset
    this.cssStyleMain = {};

    if(this.element.data.background_color != undefined && this.element.data.background_color != ''){
      this.addCssProperty('background-color', this.element.data.background_color);
    }

    if(this.element.data.background_image != undefined && this.element.data.background_image != ''){
      this.addCssProperty('background-image', 'url("' + this.element.data.background_image.url + '")');
      this.addCssProperty('background-size', 'cover');
      this.addCssProperty('background-repeat', 'none');
    }

    if(this.element.data.margin != undefined){
      this.addCssProperty('margin-top', this.element.data.margin.top + 'px');
      this.addCssProperty('margin-bottom', this.element.data.margin.bottom + 'px');
      this.addCssProperty('margin-right', this.element.data.margin.right + 'px');
      this.addCssProperty('margin-left', this.element.data.margin.left + 'px');
    }

    if(this.element.data.padding != undefined){
      this.addCssProperty('padding-top', this.element.data.padding.top + 'px');
      this.addCssProperty('padding-bottom', this.element.data.padding.bottom + 'px');
      this.addCssProperty('padding-right', this.element.data.padding.right + 'px');
      this.addCssProperty('padding-left', this.element.data.padding.left + 'px');
    }

    if(this.element.data.min_height != undefined && this.element.data.min_height != ''){
      this.addCssProperty('min-height', this.element.data.min_height + 'px');
    }
    if(this.element.data.max_width != undefined && this.element.data.max_width != ''){
      this.addCssProperty('max-width', this.element.data.max_width + 'px');
    }

    if(this.element.data.background_color != undefined && this.element.data.background_color != ''){
      this.addCssProperty('background-color', this.element.data.background_color);
    }

    if(this.element.data.color != undefined && this.element.data.color != ''){
      this.addCssProperty('color', this.element.data.color);
    }

    if(this.element.data.width != undefined && this.element.data.width != ''){
      this.addCssProperty('width', this.element.data.width + 'px');
    }
    if(this.element.data.height != undefined && this.element.data.height != ''){
      this.addCssProperty('height', this.element.data.height + 'px');
    }

    if(this.element.data.border_radius != undefined && this.element.data.border_radius != ''){
      this.addCssProperty('border-radius', this.element.data.border_radius + 'px');
    }
  }
  /** End CSS Methods */

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
      panelClass: ['modal-full-width-mobile', 'modal-edit-form-element'],
      data: data
    }).afterClosed().subscribe(res => {
      this.element.isSelected = false;
      this.onInitCss();
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

  isPositionAbsolute(): boolean {
    if(!this.element){
      return false;
    }

    if(this.element.data && this.element.data.position == 1){
      return true;
    }

    return false;
  }

  public static createElement() {
    let element = new MiaElement();
    return element;
  }

  public static getEditForm(): Array<any> {
    return [];
  }
}
