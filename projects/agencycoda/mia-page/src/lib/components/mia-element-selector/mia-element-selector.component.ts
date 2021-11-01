import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MiaEditorElement } from '../../entities/mia-editor-element';
import { MiaPageEditorConfig, MIA_PAGE_EDITOR_CONFIG } from '../../entities/mia-page-editor-config';

@Component({
  selector: 'mia-element-selector',
  templateUrl: './mia-element-selector.component.html',
  styleUrls: ['./mia-element-selector.component.css']
})
export class MiaElementSelectorComponent implements OnInit {

  @Output() selectElement = new EventEmitter<MiaEditorElement>();

  constructor(
    @Inject(MIA_PAGE_EDITOR_CONFIG) public config: MiaPageEditorConfig,
  ) { }

  ngOnInit(): void {
  }

  onSelectElement(editor: MiaEditorElement) {
    if(editor.component == undefined){
      return;
    }

    if(editor.component.createElement == undefined){
      return;
    }

    this.selectElement.emit(editor);
  }
}
