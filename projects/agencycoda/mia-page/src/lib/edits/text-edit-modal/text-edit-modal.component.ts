import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'mia-text-edit-modal',
  templateUrl: './text-edit-modal.component.html',
  styleUrls: ['./text-edit-modal.component.css']
})
export class TextEditModalComponent implements OnInit {

  constructor(
    protected dialogRef: MatDialogRef<TextEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MiaElement
  ) { }

  ngOnInit(): void {
  }

}
