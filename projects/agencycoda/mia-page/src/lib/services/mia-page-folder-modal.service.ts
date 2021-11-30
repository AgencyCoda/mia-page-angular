import { MiaField, MiaFormConfig, MiaFormModalComponent, MiaFormModalConfig, MiaFormModalV2Config, MiaFormModalV2Component } from '@agencycoda/mia-form';
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

    let data = new MiaFormModalV2Config();
    data.item = item;
    data.service = this.pageService;
    if(item.id > 0){
      data.title = 'Configure Folder';
    } else {
      data.title = 'New Folder';
    }

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = [
		{ key: 'title', type: MiaField.TYPE_STRING, label: 'Title', placeholder: '' },
    ];
    config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' }
    ];

    data.config = config;

    return this.dialog.open(MiaFormModalV2Component, {
      width: '500px',
      panelClass: 'modal-full-width-mobile',
      data: data
    }).afterClosed();
  }
}
