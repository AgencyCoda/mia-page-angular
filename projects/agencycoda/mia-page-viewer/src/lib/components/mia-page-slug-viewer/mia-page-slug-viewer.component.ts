import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MiaPageHttpService, MiaPage } from '@agencycoda/mia-page-core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mia-page-slug-viewer',
  templateUrl: './mia-page-slug-viewer.component.html',
  styleUrls: ['./mia-page-slug-viewer.component.css']
})
export class MiaPageSlugViewerComponent implements OnInit, OnChanges {

  @Input() slug!: string;

  page?: MiaPage;
  isLoading = true;

  constructor(
    protected pageService: MiaPageHttpService
  ) { }

  ngOnInit(): void {
    this.loadPage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.slug){
      this.loadPage();
    }
  }

  loadPage() {
    this.isLoading = true;
    this.pageService
    .fetchBySlug(this.slug)
    .pipe(tap(page => this.page = page))
    .subscribe(res => this.isLoading = false);
  }
}
