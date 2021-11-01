import { Injectable, InjectionToken } from "@angular/core";
/*import { ColumnOneComponent } from "../elements/column-one/column-one.component";
import { ColumnOneTwoComponent } from "../elements/column-one-two/column-one-two.component";
import { ColumnThreeComponent } from "../elements/column-three/column-three.component";
import { ColumnTwoOneComponent } from "../elements/column-two-one/column-two-one.component";
import { ColumnTwoComponent } from "../elements/column-two/column-two.component";
import { TextElementComponent } from "../elements/text-element/text-element.component";*/
import { MiaEditorTab } from "./mia-editor-tab";

export const MIA_PAGE_EDITOR_CONFIG = new InjectionToken<MiaPageEditorConfig>('agencycoda.page_editor_config');

@Injectable()
export class MiaPageEditorConfig {
  tabs: Array<MiaEditorTab> = [];
}