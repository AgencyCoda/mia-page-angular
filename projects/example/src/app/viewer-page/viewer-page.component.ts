import { MiaPage } from '@agencycoda/mia-page-core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer-page',
  templateUrl: './viewer-page.component.html',
  styleUrls: ['./viewer-page.component.scss']
})
export class ViewerPageComponent implements OnInit {

  page = new MiaPage();

  constructor() { }

  ngOnInit(): void {
    this.loadTestPage();
  }

  loadTestPage() {
    this.page.title = "Test Page";
    this.page.data = {"elements":[{"type":"column-one","classes":"","data":{"elements":[{"type":"element-text","classes":"","data":{"elements":[]},"isSelected":false}]},"isSelected":false}]};
  }
}
