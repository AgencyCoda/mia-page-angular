/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

/** COMPONENTS */
import { MiaPageViewerComponent } from './components/mia-page-viewer/mia-page-viewer.component';
import { MiaPrintViewComponent } from './components/mia-print-view/mia-print-view.component';
import { MiaPageSlugViewerComponent } from './components/mia-page-slug-viewer/mia-page-slug-viewer.component';

/** ELEMENTS */
import { ColumnOneViewComponent } from './views/column-one-view/column-one-view.component';
import { TextViewComponent } from './views/text-view/text-view.component';
import { TitleViewComponent } from './views/title-view/title-view.component';
import { ColumnTwoViewComponent } from './views/column-two-view/column-two-view.component';
import { ImageViewComponent } from './views/image-view/image-view.component';
import { ButtonViewComponent } from './views/button-view/button-view.component';

/** PROVIDERS */
import { MiaPageViewConfig, MIA_PAGE_VIEWER_CONFIG } from './entities/mia-view-config';
import { MiaViewerPageComponent } from './pages/mia-viewer-page/mia-viewer-page.component';
import { ColumnOneTwoViewComponent } from './views/column-one-two-view/column-one-two-view.component';
import { ColumnThreeViewComponent } from './views/column-three-view/column-three-view.component';
import { ColumnTwoOneViewComponent } from './views/column-two-one-view/column-two-one-view.component';

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
    
    // Pages
    MiaViewerPageComponent,
         ColumnOneTwoViewComponent,
         ColumnThreeViewComponent,
         ColumnTwoOneViewComponent,
  ],
  imports: [
    // Angular Core
    CommonModule,
    QuillModule
  ],
  exports: [
    // Components
    MiaPageViewerComponent,
    MiaPrintViewComponent,
    MiaPageSlugViewerComponent,

    // Pages
    MiaViewerPageComponent
  ],
  providers: [
    {
      provide: MIA_PAGE_VIEWER_CONFIG,
      useClass: MiaPageViewConfig
    },
  ]
})
export class MiaPageViewerModule { }
