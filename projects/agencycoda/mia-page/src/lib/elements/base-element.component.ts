import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MiaElement } from "../entities/mia-element";

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
