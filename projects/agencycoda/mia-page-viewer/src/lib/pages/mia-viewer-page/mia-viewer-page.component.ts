import { nil } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mia-viewer-page',
  templateUrl: './mia-viewer-page.component.html',
  styleUrls: ['./mia-viewer-page.component.css']
})
export class MiaViewerPageComponent implements OnInit {

  slugSelected?: string;

  constructor(
    protected route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadParams();
  }

  loadParams() {
    this.route.params
    .pipe(map(params => params.slug))
    .subscribe(slug => this.slugSelected = slug);
  }
}
