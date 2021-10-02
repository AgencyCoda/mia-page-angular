import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MiaBaseElementComponent } from '../../elements/base-element.component';
import { MiaEditorElement } from '../../entities/mia-editor-element';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';

@Component({
  selector: 'mia-print-element',
  templateUrl: './mia-print-element.component.html',
  styleUrls: ['./mia-print-element.component.css']
})
export class MiaPrintElementComponent implements OnInit {

  @ViewChild('contentColumn') contentColumn?: ElementRef;

  @Input() element!: MiaElement;
  @Output() clickElement = new EventEmitter<MiaElement>();

  constructor(
    protected factoryResolver: ComponentFactoryResolver,
    protected viewContainerRef: ViewContainerRef,
    protected editorService: MiaPageEditorService
  ) { }

  ngOnInit(): void {
    this.generateComponent();
  }

  generateComponent() {
    let editor = this.editorService.getEditorById(this.element.type);

    if(editor == undefined){
      return;
    }

    const component = this.factoryResolver.resolveComponentFactory(editor.component);
    
    const view = this.viewContainerRef.createComponent(component);
    (<MiaBaseElementComponent>view.instance).element = this.element;
    (<MiaBaseElementComponent>view.instance).editor = editor;
    (<MiaBaseElementComponent>view.instance).clickElement = this.clickElement;
  }

}
