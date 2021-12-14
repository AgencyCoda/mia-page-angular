import { nil } from '@agencycoda/mia-core';
import { MiaField, MiaFormModalsService, MiaFormModalV3Config, SwitchFieldComponent } from '@agencycoda/mia-form';
import { MiaPageHttpService } from '@agencycoda/mia-page-core';
import { MiaPage } from '@agencycoda/mia-page-core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiaPageFolderModalService } from '../../services/mia-page-folder-modal.service';
import { SeoPreviewBoxComponent } from '../seo-preview-box/seo-preview-box.component';

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
    protected folderModal: MiaPageFolderModalService,
    protected formModal: MiaFormModalsService
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

    let config = new MiaFormModalV3Config();
    config.title = 'Page Settings';
    config.service = this.pageService;
    config.item = page;
    config.tabs = [
      { title: 'General', fields: [
        { key: 'seo_title', type: MiaField.TYPE_STRING, label: 'PAGE TITLE', placeholder: '', caption: 'The page title appears in the top of the browser windows.' },
        { key: 'title', type: MiaField.TYPE_STRING, label: 'NAVIGATION TITLE', placeholder: '', caption: 'The navigation title is the page’s name in the navigation menu.' },
        { key: 'url', type: MiaField.TYPE_STRING, label: 'URL SLUG', placeholder: '', caption: 'The unique location slug for this page.' },
        { key: 'permissions', type: 'select', label: 'PERMISSIONS', extra: {
          options: [
            { id: 0, title: 'All users' },
            { id: 1, title: 'All members' },
            { id: 2, title: 'Only Practitioners' },
          ],
          can_add: false,
        }},
        { key: 'switch', type: MiaField.TYPE_CUSTOM, label: 'Enable Page / Draft Page', caption: 'Disabled pages can’t be accessed by your site visitors.', extra: { component: SwitchFieldComponent } },
      ] },

      { title: 'SEO', fields: [
        { key: '', type: MiaField.TYPE_LABEL, label: '<p>Search engine optimization (SEO) allows you to improve your ranking in search results. Use these features to make it easier for users to find your page when they search for it. <a href="">Learn More</a></p>', classes: 'label-custom' },
        { key: 'custom_example', type: MiaField.TYPE_CUSTOM, extra: { component: SeoPreviewBoxComponent } },
        { key: 'seo_title', type: MiaField.TYPE_STRING, label: 'SEO TITLE (OPTIONAL)', placeholder: '', caption: '60/150' },
        { key: 'seo_description', type: "text", label: 'SEO DESCRIPTION (OPTIONAL)', placeholder: '', caption: '226/300' },
        { key: 'switch', type: MiaField.TYPE_CUSTOM, label: 'Hide Page from Search Results', caption: '', extra: { component: SwitchFieldComponent } },
      ] },

      { title: 'Advanced', fields: [
        { key: '', type: MiaField.TYPE_LABEL, label: '<p>Inject custom code or scripts to enhance specific parts of your page. <a href="">Learn More</a></p>', classes: 'label-custom' },
        { key: 'header_code_injection', type: "text", label: 'PAGE HEADER CODE INJECTION', placeholder: '', caption: 'Inject code in the page’s <head> tag.' },
        { key: 'header_code_injection', type: "text", label: 'PAGE BODY CODE INJECTION', placeholder: '', caption: 'Inject code in the page’s <body> tag.' },
      ] },
    ];

    this.formModal.openV3(config).subscribe();
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
