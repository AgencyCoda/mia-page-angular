import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MiaPageViewerService } from '../../services/mia-page-viewer.service';
import { MiaBaseViewComponent } from '../../views/base-view.component';

@Component({
  selector: 'mia-print-view',
  templateUrl: './mia-print-view.component.html',
  styleUrls: ['./mia-print-view.component.css']
})
export class MiaPrintViewComponent implements OnInit {

  @ViewChild('contentColumn') contentColumn?: ElementRef;

  @Input() element!: MiaElement;

  constructor(
    protected factoryResolver: ComponentFactoryResolver,
    protected viewContainerRef: ViewContainerRef,
    protected viewerService: MiaPageViewerService
  ) { }

  ngOnInit(): void {
    this.generateComponent();
  }

  generateComponent() {
    const component = this.factoryResolver.resolveComponentFactory(this.viewerService.getComponentById(this.element.type));
    
    const view = this.viewContainerRef.createComponent(component);
    (<MiaBaseViewComponent>view.instance).element = this.element;
  }

}
