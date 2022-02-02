/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** AGENCY CODA */
import { MiaFormModule } from '@agencycoda/mia-form';
import { MiaPageViewerModule, MiaViewerDefault, MIA_PAGE_VIEWER_CONFIG } from '@agencycoda/mia-page-viewer';

/** ANGULAR MATERIAL */
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';


/** OTHER LIBRARIES */
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';

/** COMPONENTS */
import { MiaPageEditorComponent } from './components/mia-page-editor/mia-page-editor.component';
import { AddElementModalComponent } from './modals/add-element-modal/add-element-modal.component';
import { MiaPrintElementComponent } from './components/mia-print-element/mia-print-element.component';
import { MiaElementActionsComponent } from './components/mia-element-actions/mia-element-actions.component';
import { MiaElementSelectorComponent } from './components/mia-element-selector/mia-element-selector.component';

import { MiaPageManagementComponent } from './components/mia-page-management/mia-page-management.component';
import { MiaManagementSidebarComponent } from './components/mia-management-sidebar/mia-management-sidebar.component';
import { MiaManagementDeletedSidebarComponent } from './components/mia-management-deleted-sidebar/mia-management-deleted-sidebar.component';

import { SeoPreviewBoxComponent } from './components/seo-preview-box/seo-preview-box.component';

import { MiaRenderPageToImageComponent } from './components/mia-render-page-to-image/mia-render-page-to-image.component';

/** ELEMENTS */
import { RowElementComponent } from './elements/row-element/row-element.component';
import { ColumnOneComponent } from './elements/column-one/column-one.component';
import { TextElementComponent } from './elements/text-element/text-element.component';
import { ColumnTwoComponent } from './elements/column-two/column-two.component';
import { ColumnThreeComponent } from './elements/column-three/column-three.component';
import { ColumnOneTwoComponent } from './elements/column-one-two/column-one-two.component';
import { ColumnTwoOneComponent } from './elements/column-two-one/column-two-one.component';
import { ImageElementComponent } from './elements/image-element/image-element.component';
import { VideoElementComponent } from './elements/video-element/video-element.component';
import { AudioElementComponent } from './elements/audio-element/audio-element.component';
import { ListElementComponent } from './elements/list-element/list-element.component';
import { CodeElementComponent } from './elements/code-element/code-element.component';
import { DividerElementComponent } from './elements/divider-element/divider-element.component';
import { SpaceElementComponent } from './elements/space-element/space-element.component';
import { EmbedElementComponent } from './elements/embed-element/embed-element.component';
import { ButtonElementComponent } from './elements/button-element/button-element.component';
import { GalleryElementComponent } from './elements/gallery-element/gallery-element.component';
import { CarouselElementComponent } from './elements/carousel-element/carousel-element.component';
import { MapElementComponent } from './elements/map-element/map-element.component';
import { NewsElementComponent } from './elements/news-element/news-element.component';
import { FillBlanksElementComponent } from './elements/fill-blanks-element/fill-blanks-element.component';
import { WordDialogComponent } from './elements/fill-blanks-element/word-dialog/word-dialog.component';
import { TrueOrFalseElementComponent } from './elements/true-or-false-element/true-or-false-element.component';
import { MultipleChooiseElementComponent } from './elements/multiple-chooise-element/multiple-chooise-element.component';

/** PROVIDERS */
import { MiaPageEditorConfig, MIA_PAGE_EDITOR_CONFIG } from './entities/mia-page-editor-config';
import { MiaContainerPrintElementComponent } from './components/mia-container-print-element/mia-container-print-element.component';







@NgModule({
  declarations: [
    // Components
    MiaPageEditorComponent,
    MiaElementSelectorComponent,
    MiaPageManagementComponent,
    MiaManagementSidebarComponent,
    MiaManagementDeletedSidebarComponent,
    SeoPreviewBoxComponent,
    MiaRenderPageToImageComponent,
    // Elements
    RowElementComponent,
    ImageElementComponent,
    VideoElementComponent,

    AddElementModalComponent,
    MiaPrintElementComponent,
    ColumnOneComponent,
    TextElementComponent,
    ColumnTwoComponent,
    ColumnThreeComponent,
    ColumnOneTwoComponent,
    ColumnTwoOneComponent,
    MiaElementActionsComponent,
    AudioElementComponent,
    ListElementComponent,
    CodeElementComponent,
    DividerElementComponent,
    SpaceElementComponent,
    EmbedElementComponent,
    ButtonElementComponent,
    GalleryElementComponent,
    CarouselElementComponent,
    MapElementComponent,
    NewsElementComponent,
    TrueOrFalseElementComponent,
    FillBlanksElementComponent,
    MultipleChooiseElementComponent,
    MiaContainerPrintElementComponent,
    WordDialogComponent
  ],
  imports: [
    // Angular Core
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Angular Material
    DragDropModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSliderModule,
    MatCheckboxModule,
    MatTooltipModule,

    // Agency Coda
    MiaFormModule,
    MiaPageViewerModule,

    // Other Libraries
    FlexLayoutModule,
    QuillModule,
    ContenteditableValueAccessorModule
  ],
  exports: [
    // Components
    MiaPageEditorComponent,
    MiaPrintElementComponent,
    MiaElementSelectorComponent,
    MiaPageManagementComponent,
    MiaRenderPageToImageComponent,

    // Modals
    AddElementModalComponent
  ],
  providers: [
    {
      provide: MIA_PAGE_EDITOR_CONFIG,
      useClass: MiaPageEditorConfig
    },
    {
      provide: MIA_PAGE_VIEWER_CONFIG,
      useValue: MiaViewerDefault.configDefault()
    },
  ]
})
export class MiaPageModule { }
