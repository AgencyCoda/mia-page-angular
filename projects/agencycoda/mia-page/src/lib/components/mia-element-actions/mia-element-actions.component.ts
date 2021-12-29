import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mia-element-actions',
  templateUrl: './mia-element-actions.component.html',
  styleUrls: ['./mia-element-actions.component.css']
})
export class MiaElementActionsComponent implements OnInit {

  @Output() clickEdit = new EventEmitter<any>();
  @Output() clickRemove = new EventEmitter<any>();
  @Output() clickDuplicate = new EventEmitter<any>();
  @Output() clickMoveUp = new EventEmitter<any>();
  @Output() clickMoveDown = new EventEmitter<any>();

  constructor() { }

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
}
