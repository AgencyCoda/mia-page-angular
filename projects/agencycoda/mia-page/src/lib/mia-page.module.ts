/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** AGENCY CODA */

/** ANGULAR MATERIAL */
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

/** COMPONENTS */
import { MiaPageEditorComponent } from './components/mia-page-editor/mia-page-editor.component';
import { TitleElementComponent } from './elements/title-element/title-element.component';
import { RowElementComponent } from './elements/row-element/row-element.component';
import { AddElementModalComponent } from './modals/add-element-modal/add-element-modal.component';
import { MiaPrintElementComponent } from './components/mia-print-element/mia-print-element.component';
import { ColumnOneComponent } from './elements/column-one/column-one.component';
import { TextElementComponent } from './elements/text-element/text-element.component';



@NgModule({
  declarations: [
    MiaPageEditorComponent,
    TitleElementComponent,
    RowElementComponent,

    AddElementModalComponent,
    MiaPrintElementComponent,
    ColumnOneComponent,
    TextElementComponent
  ],
  imports: [
    // Angular Core
    CommonModule,

    // Angular Material
    MatDialogModule,
    MatTabsModule,
    MatIconModule
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
