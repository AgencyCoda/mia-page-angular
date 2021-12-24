import { MiaPageEditorComponent, MiaPageManagementComponent, MiaPageManagementConfig } from '@agencycoda/mia-page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewerPageComponent } from './viewer-page/viewer-page.component';

const routes: Routes = [
  { path: 'mia-page-editor/:id', component: MiaPageEditorComponent },
  { path: 'viewer', component: ViewerPageComponent },
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
