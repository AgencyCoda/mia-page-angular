import { MiaPage } from '@agencycoda/mia-page-core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiaPageManagementConfig } from '../../entities/mia-page-management-config';

@Component({
  selector: 'mia-page-management',
  templateUrl: './mia-page-management.component.html',
  styleUrls: ['./mia-page-management.component.scss']
})
export class MiaPageManagementComponent implements OnInit {

  config!: MiaPageManagementConfig;

  page?: MiaPage;

  typePageView = 0; // 0 = Desktop, 1 = Tablet, 2 = Mobile
  typeSidebarView = 0; // 0 = Sidebar, 1 = Deleted Sidebar

  constructor(
    protected route: ActivatedRoute,
    protected navigator: Router
  ) { }

  ngOnInit(): void {
    this.loadParams();
  }

  onClickEdit() {
    this.navigator.navigateByUrl('mia-page-editor/' + this.page!.id);
  }

  onPageSelected(page: MiaPage) {
    this.page = page;
  }

  loadParams() {
    this.route.data.subscribe(params => this.config = params as MiaPageManagementConfig);
  }

  pageStatus(): string {
    return MiaPage.getStatus(this.page!);
  }
}
