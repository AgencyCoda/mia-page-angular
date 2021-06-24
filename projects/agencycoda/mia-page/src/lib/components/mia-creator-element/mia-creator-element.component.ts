import { Component, Input, OnInit } from '@angular/core';
import { MiaElement } from '../../entities/mia-element';
import { MiaPage } from '../../entities/mia-page';

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
