import { MiaPageEditorComponent, MiaPageManagementComponent, MiaPageManagementConfig } from 'projects/agencycoda/mia-page/src/public-api';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiaViewerPageComponent } from 'projects/agencycoda/mia-page-viewer/src/public-api';

const routes: Routes = [
  { path: 'mia-page-editor/:id', component: MiaPageEditorComponent },
  { path: 'viewer/:slug', component: MiaViewerPageComponent },
  { 
    path: 'management', 
    component: MiaPageManagementComponent,
    data: {
      backUrl: '/'
    } as MiaPageManagementConfig
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
