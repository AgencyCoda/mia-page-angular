/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** AGENCY CODA */

/** ANGULAR MATERIAL */

/** COMPONENTS */
import { MiaPageComponent } from './mia-page.component';
import { MiaPageEditorComponent } from './components/mia-page-editor/mia-page-editor.component';
import { MiaPrintElementsComponent } from './components/mia-print-elements/mia-print-elements.component';
import { TitleElementComponent } from './elements/title-element/title-element.component';
import { RowElementComponent } from './elements/row-element/row-element.component';
import { MiaCreatorElementComponent } from './components/mia-creator-element/mia-creator-element.component';



@NgModule({
  declarations: [
    MiaPageComponent,
    MiaPageEditorComponent,
    MiaPrintElementsComponent,
    TitleElementComponent,
    RowElementComponent,
    MiaCreatorElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiaPageComponent,
    MiaPageEditorComponent,
    MiaPrintElementsComponent
  ]
})
export class MiaPageModule { }
