import { MiaElement } from "@agencycoda/mia-page-core";
import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'mia-base-element',
    template: ''
})
export class MiaBaseElementComponent implements OnInit {

  @Input() element!: MiaElement;

  constructor() {
        
  }

  ngOnInit(): void {
        
  }
}
