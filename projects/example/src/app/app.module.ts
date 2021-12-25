import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MiaPageViewerModule, MiaViewerDefault, MIA_PAGE_VIEWER_CONFIG } from 'projects/agencycoda/mia-page-viewer/src/public-api';

import { MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { QuillModule } from 'ngx-quill';
import { MiaPageDefault, MiaPageModule, MIA_PAGE_EDITOR_CONFIG } from 'projects/agencycoda/mia-page/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QuillModule.forRoot(),

    MiaPageModule,
    MiaPageViewerModule
  ],
  providers: [
    {
      provide: MIA_AUTH_PROVIDER,
      useValue: {
        baseUrl: 'https://iron-radio-322514.uc.r.appspot.com/'
        //baseUrl: 'http://0.0.0.0:8080/'
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
