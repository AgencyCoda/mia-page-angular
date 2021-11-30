import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mia-page-management',
  templateUrl: './mia-page-management.component.html',
  styleUrls: ['./mia-page-management.component.scss']
})
export class MiaPageManagementComponent implements OnInit {

  typePageView = 0; // 0 = Desktop, 1 = Tablet, 2 = Mobile
  typeSidebarView = 0; // 0 = Sidebar, 1 = Deleted Sidebar

  constructor() { }

  ngOnInit(): void {
  }

}
