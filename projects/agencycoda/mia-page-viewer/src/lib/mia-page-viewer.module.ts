/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** COMPONENTS */
import { MiaPageViewerComponent } from './components/mia-page-viewer/mia-page-viewer.component';
import { MiaPrintViewComponent } from './components/mia-print-view/mia-print-view.component';
import { MiaPageSlugViewerComponent } from './components/mia-page-slug-viewer/mia-page-slug-viewer.component';

/** ELEMENTS */
import { ColumnOneViewComponent } from './views/column-one-view/column-one-view.component';
import { TextViewComponent } from './views/text-view/text-view.component';
import { TitleViewComponent } from './views/title-view/title-view.component';

@NgModule({
  declarations: [
    // Components
    MiaPageViewerComponent,
    MiaPrintViewComponent,
    MiaPageSlugViewerComponent,

    // Elements
    ColumnOneViewComponent,
    TextViewComponent,
    TitleViewComponent,
  ],
  imports: [
    // Angular Core
    CommonModule,
  ],
  exports: [
    // Components
    MiaPageViewerComponent,
    MiaPrintViewComponent,
    MiaPageSlugViewerComponent
  ]
})
export class MiaPageViewerModule { }
