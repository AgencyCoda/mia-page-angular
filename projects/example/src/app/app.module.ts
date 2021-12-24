import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ViewerPageComponent } from './viewer-page/viewer-page.component';
import { MiaPageViewerModule, MiaViewerDefault, MIA_PAGE_VIEWER_CONFIG } from '@agencycoda/mia-page-viewer';

import { MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { QuillModule } from 'ngx-quill';
import { MiaPageDefault, MiaPageModule, MIA_PAGE_EDITOR_CONFIG } from '@agencycoda/mia-page';

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
