import { MiaPage } from '@agencycoda/mia-page-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mia-page-viewer',
  templateUrl: './mia-page-viewer.component.html',
  styleUrls: ['./mia-page-viewer.component.css']
})
export class MiaPageViewerComponent implements OnInit {

  @Input() page = new MiaPage();

  constructor() { }

  ngOnInit(): void {
    console.log(this.page);
  }

}
