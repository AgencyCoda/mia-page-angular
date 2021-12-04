/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

/** AGENCY CODA */

/** ANGULAR MATERIAL */
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

/** OTHER LIBRARIES */
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

/** COMPONENTS */
import { MiaPageEditorComponent } from './components/mia-page-editor/mia-page-editor.component';
import { AddElementModalComponent } from './modals/add-element-modal/add-element-modal.component';
import { MiaPrintElementComponent } from './components/mia-print-element/mia-print-element.component';
import { MiaElementActionsComponent } from './components/mia-element-actions/mia-element-actions.component';
import { MiaElementSelectorComponent } from './components/mia-element-selector/mia-element-selector.component';

import { MiaPageManagementComponent } from './components/mia-page-management/mia-page-management.component';
import { MiaManagementSidebarComponent } from './components/mia-management-sidebar/mia-management-sidebar.component';
import { MiaManagementDeletedSidebarComponent } from './components/mia-management-deleted-sidebar/mia-management-deleted-sidebar.component';

/** ELEMENTS */
import { TitleElementComponent } from './elements/title-element/title-element.component';
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
import { QuoteElementComponent } from './elements/quote-element/quote-element.component';
import { SpaceElementComponent } from './elements/space-element/space-element.component';
import { EmbedElementComponent } from './elements/embed-element/embed-element.component';
import { ButtonElementComponent } from './elements/button-element/button-element.component';
import { GalleryElementComponent } from './elements/gallery-element/gallery-element.component';
import { CarouselElementComponent } from './elements/carousel-element/carousel-element.component';
import { MapElementComponent } from './elements/map-element/map-element.component';





@NgModule({
  declarations: [
    // Components
    MiaPageEditorComponent,
    MiaElementSelectorComponent,
    MiaPageManagementComponent,
    MiaManagementSidebarComponent,
    MiaManagementDeletedSidebarComponent,
    // Elements
    TitleElementComponent,
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
    QuoteElementComponent,
    SpaceElementComponent,
    EmbedElementComponent,
    ButtonElementComponent,
    GalleryElementComponent,
    CarouselElementComponent,
    MapElementComponent,
  ],
  imports: [
    // Angular Core
    CommonModule,
    FormsModule,
    DragDropModule,
    RouterModule,

    // Angular Material
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,

    // Other Libraries
    FlexLayoutModule,
    QuillModule
  ],
  exports: [
    // Components
    MiaPageEditorComponent,
    MiaPrintElementComponent,
    MiaElementSelectorComponent,
    MiaPageManagementComponent,
    
    // Modals
    AddElementModalComponent
  ]
})
export class MiaPageModule { }
