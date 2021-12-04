import { nil } from '@agencycoda/mia-core';
import { MiaPageHttpService } from '@agencycoda/mia-page-core';
import { MiaPage } from '@agencycoda/mia-page-core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiaPageFolderModalService } from '../../services/mia-page-folder-modal.service';

@Component({
  selector: 'mia-management-sidebar',
  templateUrl: './mia-management-sidebar.component.html',
  styleUrls: ['./mia-management-sidebar.component.scss']
})
export class MiaManagementSidebarComponent implements OnInit {

  @Input() backUrl: string = '/';

  @Output() pageSelected = new EventEmitter<MiaPage>();

  pages = new Array<MiaPage>();

  constructor(
    protected pageService: MiaPageHttpService,
    protected folderModal: MiaPageFolderModalService
  ) { }

  ngOnInit(): void {
    this.loadPages();
  }

  loadPages() {
    this.pageService.tree().subscribe(res => this.pages = res);
  }

  onClickPage(page: MiaPage) {
    this.pageSelected.emit(page);
  }

  onClickSetting(page: MiaPage) {

  }

  onClickDeletedPages() {

  }

  onClickEditFolder(folder: MiaPage) {
    this.folderModal.open(folder).pipe(nil()).subscribe(res => this.loadPages());
  }

  onClickNewPage() {
    let page = new MiaPage();
    page.title = 'New Page empty';
    this.pageService.saveOb(page).subscribe(res => this.loadPages());
  }

  onClickNewPageInFolder(folder: MiaPage) {
    let page = new MiaPage();
    page.title = 'New Page empty';
    page.parent_id = folder.id;
    this.pageService.saveOb(page).subscribe(res => this.loadPages());
  }

  onClickNewFolder() {
    this.folderModal.open(new MiaPage()).pipe(nil()).subscribe(res => this.loadPages());
  }

  drop(event: CdkDragDrop<MiaPage[]>) {
    moveItemInArray(this.pages, event.previousIndex, event.currentIndex);
  }
}
