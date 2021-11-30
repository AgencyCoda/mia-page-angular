import { nil } from '@agencycoda/mia-core';
import { MiaPageHttpService } from '@agencycoda/mia-page-core';
import { MiaPage } from '@agencycoda/mia-page-core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MiaPageFolderModalService } from '../../services/mia-page-folder-modal.service';

@Component({
  selector: 'mia-management-sidebar',
  templateUrl: './mia-management-sidebar.component.html',
  styleUrls: ['./mia-management-sidebar.component.scss']
})
export class MiaManagementSidebarComponent implements OnInit {

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

  onClickSetting(page: MiaPage) {

  }

  onClickDeletedPages() {

  }

  onClickEditFolder(folder: MiaPage) {
    this.folderModal.open(folder).pipe(nil()).subscribe(res => this.loadPages());
  }

  onClickNewFolder() {
    this.folderModal.open(new MiaPage()).pipe(nil()).subscribe(res => this.loadPages());
  }

  drop(event: CdkDragDrop<MiaPage[]>) {
    moveItemInArray(this.pages, event.previousIndex, event.currentIndex);
  }
}
