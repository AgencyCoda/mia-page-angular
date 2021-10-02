import { NgModule } from '@angular/core';

/** COMPONENTS */
import { MiaPageViewerComponent } from './components/mia-page-viewer/mia-page-viewer.component';
import { ColumnOneViewComponent } from './views/column-one-view/column-one-view.component';
import { TextViewComponent } from './views/text-view/text-view.component';
import { TitleViewComponent } from './views/title-view/title-view.component';

@NgModule({
  declarations: [
    MiaPageViewerComponent,
    ColumnOneViewComponent,
    TextViewComponent,
    TitleViewComponent
  ],
  imports: [
  ],
  exports: [
    MiaPageViewerComponent
  ]
})
export class MiaPageViewerModule { }
