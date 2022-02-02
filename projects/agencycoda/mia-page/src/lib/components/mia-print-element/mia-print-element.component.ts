import { MiaElement, MiaPage } from '@agencycoda/mia-page-core';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { MiaBaseElementComponent } from '../../elements/base-element.component';
import { MiaEditorElement } from '../../entities/mia-editor-element';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';

@Component({
  selector: 'mia-print-element',
  templateUrl: './mia-print-element.component.html',
  styleUrls: ['./mia-print-element.component.css']
})
export class MiaPrintElementComponent implements OnInit, AfterViewInit {
  
  @Input() element!: MiaElement;
  @Input() parent?: MiaElement;
  @Input() page!: MiaPage;

  @Output() clickElement = new EventEmitter<MiaElement>();
  @Output() clickRemove = new EventEmitter<MiaElement>();

  constructor(
    protected viewContainerRef: ViewContainerRef,
    protected editorService: MiaPageEditorService,
  ) { }

  ngOnInit(): void {
    this.generateComponent();
  }

  ngAfterViewInit(): void {
    
  }

  generateComponent() {
    if(this.element == undefined || this.element.type == undefined){
      return;
    }

    let editor = this.editorService.getEditorById(this.element.type);

    if(editor == undefined){
      return;
    }

    this.element.editForm = editor.component.getEditForm();

    const view = this.viewContainerRef.createComponent<MiaBaseElementComponent>(editor.component);
    view.instance.page = this.page;
    view.instance.element = this.element;
    view.instance.parent = this.parent;
    view.instance.editor = editor;
    view.instance.clickElement = this.clickElement;
    view.instance.clickRemove = this.clickRemove;
  }

}
