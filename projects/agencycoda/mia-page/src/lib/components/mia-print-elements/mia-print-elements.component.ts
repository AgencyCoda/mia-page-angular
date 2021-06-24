import { Component, Input, OnInit } from '@angular/core';
import { MiaElement } from '../../entities/mia-element';

@Component({
  selector: 'mia-print-elements',
  templateUrl: './mia-print-elements.component.html',
  styleUrls: ['./mia-print-elements.component.css']
})
export class MiaPrintElementsComponent implements OnInit {

  @Input() elements: Array<MiaElement> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
