import { nil } from '@agencycoda/mia-core';
import { MiaElement } from '@agencycoda/mia-page-core';
import { MiaPage } from '@agencycoda/mia-page-core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';

@Component({
  selector: 'mia-page-editor',
  templateUrl: './mia-page-editor.component.html',
  styleUrls: ['./mia-page-editor.component.css']
})
export class MiaPageEditorComponent implements OnInit {

  @Input() page = new MiaPage();

  @Input() showHeader = true;
  @Input() showSaveButton = true;
  @Input() showAddButton = true;

  constructor(
    protected editorService: MiaPageEditorService
  ) { }

  ngOnInit(): void {
  }

  onClickSave() {
    console.log(JSON.stringify(this.page));
  }

  onClickElement(element: MiaElement) {
    this.deselectedAll();
    element.isSelected = true;
  }

  onClickRemove(element: MiaElement) {
    let index = this.page.data.elements.indexOf(element);
    if(index >= 0){
      this.page.data.elements.splice(index, 1);
    }
  }

  deselectedAll() {
    this.deselectedAllElements(this.page.data.elements);
  }

  deselectedAllElements(elements: Array<MiaElement>) {
    for (const ele of elements) {
      ele.isSelected = false;

      if(ele.data && ele.data.elements){
        this.deselectedAllElements(ele.data.elements);
      }
    }
  }

  onClickAddElement() {
    this.editorService
    .showAddElementModal()
    .subscribe(ele => this.page.data.elements.push(ele));
  }
}
