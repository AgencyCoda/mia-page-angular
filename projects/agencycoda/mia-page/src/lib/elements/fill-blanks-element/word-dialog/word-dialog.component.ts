import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-word-dialog',
  templateUrl: './word-dialog.component.html',
  styleUrls: ['./word-dialog.component.css']
})
export class WordDialogComponent implements OnInit {

  input = new FormControl();

  constructor(
    protected dialogRef: MatDialogRef<WordDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onClickApply() {
    this.dialogRef.close(this.input.value);
  }
}
