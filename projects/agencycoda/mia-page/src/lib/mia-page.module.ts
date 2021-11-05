/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** AGENCY CODA */

/** ANGULAR MATERIAL */
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

/** OTHER LIBRARIES */
import { FlexLayoutModule } from '@angular/flex-layout';

/** COMPONENTS */
import { MiaPageEditorComponent } from './components/mia-page-editor/mia-page-editor.component';
import { AddElementModalComponent } from './modals/add-element-modal/add-element-modal.component';
import { MiaPrintElementComponent } from './components/mia-print-element/mia-print-element.component';
import { MiaElementActionsComponent } from './components/mia-element-actions/mia-element-actions.component';
import { MiaElementSelectorComponent } from './components/mia-element-selector/mia-element-selector.component';

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

@NgModule({
  declarations: [
    // Components
    MiaPageEditorComponent,
    MiaElementSelectorComponent,
    // Elements
    TitleElementComponent,
    RowElementComponent,
    ImageElementComponent,

    AddElementModalComponent,
    MiaPrintElementComponent,
    ColumnOneComponent,
    TextElementComponent,
    ColumnTwoComponent,
    ColumnThreeComponent,
    ColumnOneTwoComponent,
    ColumnTwoOneComponent,
    MiaElementActionsComponent,
  ],
  imports: [
    // Angular Core
    CommonModule,

    // Angular Material
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,

    // Other Libraries
    FlexLayoutModule,
  ],
  exports: [
    // Components
    MiaPageEditorComponent,
    MiaPrintElementComponent,
    MiaElementSelectorComponent,
    
    // Modals
    AddElementModalComponent
  ]
})
export class MiaPageModule { }
