import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MiaEditorElement } from '../../entities/mia-editor-element';
import { MiaPageEditorConfig, MIA_PAGE_EDITOR_CONFIG } from '../../entities/mia-page-editor-config';

@Component({
  selector: 'mia-element-selector',
  templateUrl: './mia-element-selector.component.html',
  styleUrls: ['./mia-element-selector.component.css']
})
export class MiaElementSelectorComponent implements OnInit {

  @Output() selectElement = new EventEmitter<MiaEditorElement>();

  inputSearch = new FormControl('');
  tabSelectedIndex = 0;

  constructor(
    @Inject(MIA_PAGE_EDITOR_CONFIG) public config: MiaPageEditorConfig,
  ) { }

  ngOnInit(): void {
    this.loadConfigSearch();
  }

  getItemsFiltered(items: Array<MiaEditorElement>): Array<MiaEditorElement> {
    if(this.inputSearch.value == ''){
      return items;
    }

    return items.filter(i => i.title.toLocaleLowerCase().indexOf(this.inputSearch.value) >= 0);
  }

  onSelectedTabIndex(tabIndex: number) {
    this.tabSelectedIndex = tabIndex;
    this.inputSearch.setValue('');
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

  loadConfigSearch() {
    this.inputSearch.valueChanges.subscribe();
  }
}
