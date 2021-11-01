import { MiaEditorElement } from '@agencycoda/mia-page';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-add-element-modal',
  templateUrl: './add-element-modal.component.html',
  styleUrls: ['./add-element-modal.component.css']
})
export class AddElementModalComponent implements OnInit {

  constructor(
    protected dialogRef: MatDialogRef<AddElementModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onSelectElement(editor: MiaEditorElement) {
    if(editor.component == undefined){
      return;
    }

    if(editor.component.createElement == undefined){
      return;
    }
    console.log('llego element');
    console.log(editor);
    this.dialogRef.close(editor.component.createElement());
  }
}
