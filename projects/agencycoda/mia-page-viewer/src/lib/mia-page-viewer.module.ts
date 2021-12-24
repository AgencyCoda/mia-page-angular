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
import { ColumnTwoViewComponent } from './views/column-two-view/column-two-view.component';
import { QuillModule } from 'ngx-quill';
import { ImageViewComponent } from './views/image-view/image-view.component';
import { ButtonViewComponent } from './views/button-view/button-view.component';

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
    ColumnTwoViewComponent,
    ImageViewComponent,
    ButtonViewComponent,
  ],
  imports: [
    // Angular Core
    CommonModule,
    QuillModule.forRoot()
  ],
  exports: [
    // Components
    MiaPageViewerComponent,
    MiaPrintViewComponent,
    MiaPageSlugViewerComponent
  ]
})
export class MiaPageViewerModule { }
