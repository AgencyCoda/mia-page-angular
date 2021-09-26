import { nil } from '@agencycoda/mia-core';
import { MiaPage } from '@agencycoda/mia-page-core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MiaPageEditorService } from '../../services/mia-page-editor.service';

@Component({
  selector: 'mia-page-editor',
  templateUrl: './mia-page-editor.component.html',
  styleUrls: ['./mia-page-editor.component.css']
})
export class MiaPageEditorComponent implements OnInit {

  @Input() page = new MiaPage();

  constructor(
    protected editorService: MiaPageEditorService
  ) { }

  ngOnInit(): void {
  }

  onClickAddElement() {
    this.editorService
    .showAddElementModal()
    .subscribe(ele => this.page.data.elements.push(ele));
  }
}
