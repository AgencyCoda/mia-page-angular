/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** AGENCY CODA */

/** ANGULAR MATERIAL */
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

/** OTHER LIBRARIES */
import { FlexLayoutModule } from '@angular/flex-layout';

/** COMPONENTS */
import { MiaPageEditorComponent } from './components/mia-page-editor/mia-page-editor.component';
import { TitleElementComponent } from './elements/title-element/title-element.component';
import { RowElementComponent } from './elements/row-element/row-element.component';
import { AddElementModalComponent } from './modals/add-element-modal/add-element-modal.component';
import { MiaPrintElementComponent } from './components/mia-print-element/mia-print-element.component';
import { ColumnOneComponent } from './elements/column-one/column-one.component';
import { TextElementComponent } from './elements/text-element/text-element.component';
import { ColumnTwoComponent } from './elements/column-two/column-two.component';
import { ColumnThreeComponent } from './elements/column-three/column-three.component';
import { ColumnOneTwoComponent } from './elements/column-one-two/column-one-two.component';
import { ColumnTwoOneComponent } from './elements/column-two-one/column-two-one.component';



@NgModule({
  declarations: [
    MiaPageEditorComponent,
    TitleElementComponent,
    RowElementComponent,

    AddElementModalComponent,
    MiaPrintElementComponent,
    ColumnOneComponent,
    TextElementComponent,
    ColumnTwoComponent,
    ColumnThreeComponent,
    ColumnOneTwoComponent,
    ColumnTwoOneComponent
  ],
  imports: [
    // Angular Core
    CommonModule,

    // Angular Material
    MatDialogModule,
    MatTabsModule,
    MatIconModule,

    // Other Libraries
    FlexLayoutModule,
  ],
  exports: [
    // Components
    MiaPageEditorComponent,
    MiaPrintElementComponent,
    
    // Modals
    AddElementModalComponent
  ]
})
export class MiaPageModule { }
