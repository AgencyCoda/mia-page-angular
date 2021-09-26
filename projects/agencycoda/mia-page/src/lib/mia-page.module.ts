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
import { MiaPrintElementsComponent } from './components/mia-print-elements/mia-print-elements.component';
import { TitleElementComponent } from './elements/title-element/title-element.component';
import { RowElementComponent } from './elements/row-element/row-element.component';
import { AddElementModalComponent } from './modals/add-element-modal/add-element-modal.component';



@NgModule({
  declarations: [
    MiaPageEditorComponent,
    MiaPrintElementsComponent,
    TitleElementComponent,
    RowElementComponent,

    AddElementModalComponent
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
    MiaPageEditorComponent,
    MiaPrintElementsComponent,
    // Modals
    AddElementModalComponent
  ]
})
export class MiaPageModule { }
