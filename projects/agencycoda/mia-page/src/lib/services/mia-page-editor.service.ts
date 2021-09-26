import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddElementModalComponent } from '../modals/add-element-modal/add-element-modal.component';

@Injectable({
  providedIn: 'root'
})
export class MiaPageEditorService {

  constructor(
      protected dialog: MatDialog
  ) { }


  showAddElementModal(): Observable<any> {
    return this.dialog.open(AddElementModalComponent, {

    }).afterClosed();
  }
}
