import { MiaPage } from '@agencycoda/mia-page-core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mia-page-editor',
  templateUrl: './mia-page-editor.component.html',
  styleUrls: ['./mia-page-editor.component.css']
})
export class MiaPageEditorComponent implements OnInit {

  @Input() page = new MiaPage();

  constructor() { }

  ngOnInit(): void {
  }
}
