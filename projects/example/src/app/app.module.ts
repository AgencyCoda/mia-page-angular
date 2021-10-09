import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaPageModule, TextElementComponent } from 'projects/agencycoda/mia-page/src/public-api';

import { MIA_PAGE_EDITOR_CONFIG } from 'projects/agencycoda/mia-page/src/lib/entities/mia-page-editor-config';

import { ColumnOneComponent } from 'projects/agencycoda/mia-page/src/lib/elements/column-one/column-one.component';
import { ColumnTwoComponent } from 'projects/agencycoda/mia-page/src/lib/elements/column-two/column-two.component';
import { ColumnThreeComponent } from 'projects/agencycoda/mia-page/src/lib/elements/column-three/column-three.component';
import { ColumnOneTwoComponent } from 'projects/agencycoda/mia-page/src/lib/elements/column-one-two/column-one-two.component';
import { ColumnTwoOneComponent } from 'projects/agencycoda/mia-page/src/lib/elements/column-two-one/column-two-one.component';
import { ViewerPageComponent } from './viewer-page/viewer-page.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { MiaPageViewerModule, MiaViewerDefault, MIA_PAGE_VIEWER_CONFIG } from 'projects/agencycoda/mia-page-viewer/src/public-api';

import { ColumnOneViewComponent } from 'projects/agencycoda/mia-page-viewer/src/lib/views/column-one-view/column-one-view.component';
import { TextViewComponent } from 'projects/agencycoda/mia-page-viewer/src/lib/views/text-view/text-view.component';
import { MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';

@NgModule({
  declarations: [
    AppComponent,
    ViewerPageComponent,
    EditorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MiaPageModule,
    MiaPageViewerModule
  ],
  providers: [
    {
      provide: MIA_AUTH_PROVIDER,
      useValue: {
        baseUrl: 'https://iron-radio-322514.uc.r.appspot.com/'
      }
    },
    { 
      provide: MIA_PAGE_EDITOR_CONFIG, 
      useValue: {
        tabs: [
          { 
            title: 'Columns', 
            items: [
              { id: 'column-one', title: 'Column 1/1', type: 1, image: 'assets/mia_elements/element_column_one.png', component: ColumnOneComponent },
              { id: 'column-two', title: 'Column 1/2 - 1/2', type: 1, image: 'assets/mia_elements/element_column_two.png', component: ColumnTwoComponent },
              { id: 'column-three', title: 'Column 1/3 - 1/3 - 1/3', type: 1, image: 'assets/mia_elements/element_column_three.png', component: ColumnThreeComponent },
              { id: 'column-one-two', title: 'Column 1/3 - 2/3', type: 1, image: 'assets/mia_elements/element_column_one_two.png', component: ColumnOneTwoComponent },
              { id: 'column-two-one', title: 'Column 2/3 - 1/3', type: 1, image: 'assets/mia_elements/element_column_two_one.png', component: ColumnTwoOneComponent },
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
    {
      provide: MIA_PAGE_VIEWER_CONFIG,
      useValue: MiaViewerDefault.configDefault()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
