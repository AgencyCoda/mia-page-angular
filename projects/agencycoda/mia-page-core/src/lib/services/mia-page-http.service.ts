import { Inject, Injectable } from '@angular/core';
import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { MiaPage } from '../entities/mia-page';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiaPageHttpService extends MiaBaseCrudHttpService<MiaPage> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(config, http);
    this.basePathUrl = config.baseUrl + 'mia-page';
  }
 
  fetchBySlug(slug: string): Observable<MiaPage> {
    return this.getOb(this.config.baseUrl + 'mia-page/fetch-by-slug/' + slug);
  }

  tree(): Observable<Array<MiaPage>> {
    return this.getOb(this.config.baseUrl + 'mia-page/tree');
  }
}