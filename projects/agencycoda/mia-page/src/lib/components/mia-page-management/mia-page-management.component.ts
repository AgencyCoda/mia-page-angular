import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiaPageManagementConfig } from '../../entities/mia-page-management-config';

@Component({
  selector: 'mia-page-management',
  templateUrl: './mia-page-management.component.html',
  styleUrls: ['./mia-page-management.component.scss']
})
export class MiaPageManagementComponent implements OnInit {

  config!: MiaPageManagementConfig;

  typePageView = 0; // 0 = Desktop, 1 = Tablet, 2 = Mobile
  typeSidebarView = 0; // 0 = Sidebar, 1 = Deleted Sidebar

  constructor(
    protected route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadParams();
  }

  loadParams() {
    this.route.data.subscribe(params => this.config = params as MiaPageManagementConfig);
  }
}
