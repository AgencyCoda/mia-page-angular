import { nil } from '@agencycoda/mia-core';
import { MiaElement, MiaPage } from '@agencycoda/mia-page-core';
import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MiaEditorElement } from '../entities/mia-editor-element';
import { MiaPageEditorConfig, MIA_PAGE_EDITOR_CONFIG } from '../entities/mia-page-editor-config';
import { AddElementModalComponent } from '../modals/add-element-modal/add-element-modal.component';

@Injectable({
  providedIn: 'root'
})
export class MiaPageEditorService {

  constructor(
    @Inject(MIA_PAGE_EDITOR_CONFIG) public config: MiaPageEditorConfig,
    protected dialog: MatDialog
  ) { }

  duplicateElement(element: MiaElement, parent?: MiaElement, page?: MiaPage) {
    let copy = JSON.parse(JSON.stringify(element));

    if(parent == undefined){
      page!.data.elements.push(copy);
    } else {
      parent.data.elements.push(copy);
    }
  }

  moveUpElement(element: MiaElement, parent?: MiaElement, page?: MiaPage) {
    if(parent == undefined){
      return;
    }

    let index = parent.data.elements.indexOf(element);
    if(index <= 0){
      return;
    }

    this.moveInArray(parent.data.elements, index, index-1);
  }

  moveDownElement(element: MiaElement, parent?: MiaElement, page?: MiaPage) {
    if(parent == undefined){
      return;
    }

    let index = parent.data.elements.indexOf(element);
    if(index >= (parent.data.elements.length-1)){
      return;
    }

    this.moveInArray(parent.data.elements, index, index+1);
  }

  showAddElementModal(): Observable<any> {
    return this.dialog.open(AddElementModalComponent, {
      'panelClass': 'add-element-modal'
    }).afterClosed().pipe(nil());
  }

  getEditorById(id: string): MiaEditorElement|undefined {
      for (const tab of this.config.tabs) {
        for (const editor of tab.items) {
            if(editor.id == id){
                return editor;
            }
        }
      }

      return;
  }

  moveInArray(arr: Array<any>, from: number, to: number) {
    arr.splice(to,0,arr.splice(from,1)[0]);
    return arr;
  }
}
