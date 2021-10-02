import { Inject, Injectable } from '@angular/core';
import { MiaPageViewConfig, MIA_PAGE_VIEWER_CONFIG } from '../entities/mia-view-config';

@Injectable({
  providedIn: 'root'
})
export class MiaPageViewerService {

  constructor(
    @Inject(MIA_PAGE_VIEWER_CONFIG) public config: MiaPageViewConfig,
  ) { }

  getComponentById(id: string): any {
    for (const element of this.config.elements) {
      if(element.id == id){
        return element.component;
      }
    }
  }
}
