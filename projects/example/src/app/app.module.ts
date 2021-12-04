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
import { MiaPageViewerModule, MiaViewerDefault, MIA_PAGE_VIEWER_CONFIG } from 'projects/agencycoda/mia-page-viewer/src/public-api';

import { ColumnOneViewComponent } from 'projects/agencycoda/mia-page-viewer/src/lib/views/column-one-view/column-one-view.component';
import { TextViewComponent } from 'projects/agencycoda/mia-page-viewer/src/lib/views/text-view/text-view.component';
import { MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { MiaPage } from 'projects/agencycoda/mia-page-core/src/public-api';
import { MiaPageDefault } from 'projects/agencycoda/mia-page/src/lib/entities/mia-page-default';

@NgModule({
  declarations: [
    AppComponent,
    ViewerPageComponent
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
        //baseUrl: 'https://iron-radio-322514.uc.r.appspot.com/'
        baseUrl: 'http://0.0.0.0:8080/'
      }
    },
    { 
      provide: MIA_PAGE_EDITOR_CONFIG, 
      useValue: MiaPageDefault.configDefault()
    },
    {
      provide: MIA_PAGE_VIEWER_CONFIG,
      useValue: MiaViewerDefault.configDefault()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
