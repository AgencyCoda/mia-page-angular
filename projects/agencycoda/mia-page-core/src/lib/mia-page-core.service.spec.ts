import { TestBed } from '@angular/core/testing';

import { MiaPageCoreService } from './mia-page-core.service';

describe('MiaPageCoreService', () => {
  let service: MiaPageCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaPageCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
