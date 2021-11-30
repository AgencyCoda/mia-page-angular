import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiaPageManagementComponent } from 'projects/agencycoda/mia-page/src/public-api';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { ViewerPageComponent } from './viewer-page/viewer-page.component';

const routes: Routes = [
  { path: 'editor', component: EditorPageComponent },
  { path: 'viewer', component: ViewerPageComponent },
  { path: 'management', component: MiaPageManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
