import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaPageModule, TextElementComponent } from 'projects/agencycoda/mia-page/src/public-api';

import { MIA_PAGE_EDITOR_CONFIG } from 'projects/agencycoda/mia-page/src/lib/entities/mia-page-editor-config';
import { ColumnOneComponent } from 'projects/agencycoda/mia-page/src/lib/elements/column-one/column-one.component';
import { ColumnTwoComponent } from 'projects/agencycoda/mia-page/src/lib/elements/column-two/column-two.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MiaPageModule
  ],
  providers: [
    { 
      provide: MIA_PAGE_EDITOR_CONFIG, 
      useValue: {
        tabs: [
          { 
            title: 'Columns', 
            items: [
              { id: 'column-one', title: 'Column 1/1', type: 1, image: 'assets/mia_elements/element_column_one.png', component: ColumnOneComponent },
              { id: 'column-two', title: 'Column 1/2 - 1/2', type: 1, image: 'assets/mia_elements/element_column_two.png', component: ColumnTwoComponent },
            ] 
          },
          { 
            title: 'Elements', 
            has_search: true,
            items: [
              { id: 'element-text', title: 'Text', type: 0, icon: 'format_size', component: TextElementComponent },
            ]
          },
          { 
            title: 'Custom', 
            has_search: true,
            has_group: true,
            items: [
              { id: 'custom-headline', title: 'headline 1', type: 1, image: 'assets/mia_elements/element_column_one.png', group: 'Headlines' },
            ]
          },
        ]
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
