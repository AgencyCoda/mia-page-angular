import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mia-element-actions',
  templateUrl: './mia-element-actions.component.html',
  styleUrls: ['./mia-element-actions.component.css']
})
export class MiaElementActionsComponent implements OnInit {

  @Input() element?: MiaElement;

  @Output() clickEdit = new EventEmitter<any>();
  @Output() clickRemove = new EventEmitter<any>();
  @Output() clickDuplicate = new EventEmitter<any>();
  @Output() clickMoveUp = new EventEmitter<any>();
  @Output() clickMoveDown = new EventEmitter<any>();

  constructor(
    protected elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  onClickEdit() {
    this.clickEdit.emit();
  }

  onClickRemove() {
    this.clickRemove.emit();
  }

  onClickDuplicate() {
    this.clickDuplicate.emit();
  }

  onClickMoveUp() {
    this.clickMoveUp.emit();
  }

  onClickMoveDown() {
    this.clickMoveDown.emit();
  }

  onClickPositionAbsolute() {
    if(!this.element){
      return;
    }
    if(!this.element.data){
      this.element.data = {};
    }
    this.element.data.position = 1;
    this.elementRef.nativeElement.parentElement.style.removeProperty('transform');
    this.elementRef.nativeElement.parentElement.style.setProperty('position', 'absolute');
  }

  onClickPositionNormal() {
    if(!this.element){
      return;
    }
    if(!this.element.data){
      this.element.data = {};
    }

    this.element.data.position = 0;
    this.elementRef.nativeElement.parentElement.style.removeProperty('transform');
    this.elementRef.nativeElement.parentElement.style.setProperty('position', 'relative');
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
}
