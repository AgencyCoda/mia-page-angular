import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mia-element-actions',
  templateUrl: './mia-element-actions.component.html',
  styleUrls: ['./mia-element-actions.component.css']
})
export class MiaElementActionsComponent implements OnInit {

  @Output() clickEdit = new EventEmitter<any>();
  @Output() clickRemove = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickEdit() {
    this.clickEdit.emit();
  }

  onClickRemove() {
    this.clickRemove.emit();
  }
}
