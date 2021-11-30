import { Inject, Injectable } from '@angular/core';
import { MiaBaseCrudHttpService } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { MiaPage } from '../entities/mia-page';
import { MiaAuthConfig, MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiaPageHttpService extends MiaBaseCrudHttpService<MiaPage> {

  constructor(
    @Inject(MIA_AUTH_PROVIDER) protected config: MiaAuthConfig,
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia-page';
  }
 
  fetchBySlug(slug: string): Observable<MiaPage> {
    return this.getOb(this.config.baseUrl + 'mia-page/fetch-by-slug/' + slug);
  }

  tree(): Observable<Array<MiaPage>> {
    return this.getOb(this.config.baseUrl + 'mia-page/tree');
  }
}