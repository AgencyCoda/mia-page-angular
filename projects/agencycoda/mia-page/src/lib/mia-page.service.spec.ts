import { TestBed } from '@angular/core/testing';

import { MiaPageService } from './mia-page.service';

describe('MiaPageService', () => {
  let service: MiaPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
