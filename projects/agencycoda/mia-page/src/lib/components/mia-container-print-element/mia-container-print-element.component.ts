import { MiaElement, MiaPage } from '@agencycoda/mia-page-core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mia-container-print-element',
  templateUrl: './mia-container-print-element.component.html',
  styleUrls: ['./mia-container-print-element.component.css']
})
export class MiaContainerPrintElementComponent implements OnInit {

  @Input() element!: MiaElement;
  @Input() parent?: MiaElement;
  @Input() page!: MiaPage;

  @Output() clickElement = new EventEmitter<MiaElement>();
  @Output() clickRemove = new EventEmitter<MiaElement>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickElement(element: MiaElement) {
    this.clickElement.emit(element);
  }

  onClickRemove() {
    this.clickRemove.emit(this.element);
  }
}
