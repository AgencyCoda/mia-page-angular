import { nil } from '@agencycoda/mia-core';
import { MiaPageHttpService } from '@agencycoda/mia-page-core';
import { MiaElement } from '@agencycoda/mia-page-core';
import { MiaPage } from '@agencycoda/mia-page-core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';

@Component({
  selector: 'mia-page-editor',
  templateUrl: './mia-page-editor.component.html',
  styleUrls: ['./mia-page-editor.component.scss']
})
export class MiaPageEditorComponent implements OnInit {

  @Output() selectedElement = new EventEmitter<MiaElement>();

  @Input() page = new MiaPage();

  @Input() showHeader = true;
  @Input() showSaveButton = true;
  @Input() showAddButton = true;

  isLoading = true;
  typePageView = 0; // 0 = Desktop, 1 = Tablet, 2 = Mobile

  constructor(
    protected editorService: MiaPageEditorService,
    protected pageService: MiaPageHttpService,
    protected route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadParams();
  }

  onClickSave() {
    //console.log(JSON.stringify(this.page));
    this.pageService.saveOb(this.page).subscribe();
  }

  onClickElement(element: MiaElement) {
    this.deselectedAll();
    element.isSelected = true;
    this.selectedElement.emit(element);
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
    if(this.page.data == undefined || Array.isArray(this.page.data)){
      this.page.data = {};
    }
    if(this.page.data.elements == undefined){
      this.page.data.elements = [];
    }

    this.editorService
    .showAddElementModal()
    .subscribe(ele => this.page.data.elements.push(ele));
  }

  addElement(ele: MiaElement) {
    this.page.data.elements.push(ele)
  }

  loadPage(pageId: number) {
    this.pageService
    .fetchOb(pageId)
    .pipe(tap(res => this.page = res))
    .pipe(tap(res => this.verifyValidPage()))
    .subscribe(res => this.isLoading = false);
  }

   verifyValidPage() {
    if(this.page.data == undefined){
      this.page.data = { elements: [] };
    }
   }

  loadParams() {
    this.route.params.subscribe(params => this.loadPage(params.id));
  }

  pageStatus(): string {
    return MiaPage.getStatus(this.page!);
  }
}
