import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaPageModule } from 'projects/agencycoda/mia-page/src/public-api';

import { MIA_PAGE_EDITOR_CONFIG } from 'projects/agencycoda/mia-page/src/lib/entities/mia-page-editor-config';

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
              { title: 'Column 1/1', type: 1, image: 'assets/mia_elements/element_column_one.png' },
              { title: 'Column 1/1', type: 1, image: 'assets/mia_elements/element_column_one.png' },
            ] 
          },
          { 
            title: 'Elements', 
            has_search: true,
            items: [
              { title: 'Text', type: 0, icon: 'format_size' },
            ]
          },
          { 
            title: 'Custom', 
            has_search: true,
            has_group: true,
            items: [
              { title: 'headline 1', type: 1, image: 'assets/mia_elements/element_column_one.png', group: 'Headlines' },
            ]
          },
        ]
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
