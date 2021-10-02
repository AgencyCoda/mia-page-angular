import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { ViewerPageComponent } from './viewer-page/viewer-page.component';

const routes: Routes = [
  { path: 'editor', component: EditorPageComponent },
  { path: 'viewer', component: ViewerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
