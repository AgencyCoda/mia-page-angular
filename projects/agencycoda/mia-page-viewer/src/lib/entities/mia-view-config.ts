import { Injectable, InjectionToken } from "@angular/core";
import { MiaViewElementConfig } from "./mia-view-element-config";

export const MIA_PAGE_VIEWER_CONFIG = new InjectionToken<MiaPageViewConfig>('agencycoda.page_viewer_config');

@Injectable()
export class MiaPageViewConfig {
  elements: Array<MiaViewElementConfig> = [];
}