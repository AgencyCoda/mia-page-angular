import { MiaElement } from '@agencycoda/mia-page-core';
import { MiaPage } from '@agencycoda/mia-page-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mia-creator-element',
  templateUrl: './mia-creator-element.component.html',
  styleUrls: ['./mia-creator-element.component.css']
})
export class MiaCreatorElementComponent implements OnInit {

  @Input() page = new MiaPage();

  creators = MiaElement.getCreators();

  constructor() { }

  ngOnInit(): void {
  }

  onClickCreator(creator: any) {
    this.page.data.elements.push(MiaElement.factory(creator.type));
    console.log(this.page.data.elements);
  }
  
}
