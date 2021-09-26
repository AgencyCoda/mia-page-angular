import { Injectable, InjectionToken } from "@angular/core";
import { MiaEditorTab } from "./mia-editor-tab";

export const MIA_PAGE_EDITOR_CONFIG = new InjectionToken<MiaPageEditorConfig>('agencycoda.page_editor_config');

@Injectable()
export class MiaPageEditorConfig {
  tabs: Array<MiaEditorTab> = [];
}