import { MiaField, MiaFormConfig, MiaFormModalComponent, MiaFormModalConfig } from '@agencycoda/mia-form';
import { MiaPageHttpService } from '@agencycoda/mia-page-core';
import { MiaPage } from '@agencycoda/mia-page-core';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiaPageFolderModalService {

  constructor(
    protected dialog: MatDialog,
    protected pageService: MiaPageHttpService
  ) { }

  open(item: MiaPage): Observable<any> {
    item.type = 1;

    let data = new MiaFormModalConfig();
    data.item = item;
    data.service = this.pageService;
    data.titleNew = 'New Folder';
    data.titleEdit = 'Configure Folder';

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = [
		{ key: 'title', type: MiaField.TYPE_STRING, label: 'Title', placeholder: '' },
    ];
    config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' }
    ];

    data.config = config;

    return this.dialog.open(MiaFormModalComponent, {
      width: '500px',
      panelClass: 'modal-full-width-mobile',
      data: data
    }).afterClosed();
  }
}
