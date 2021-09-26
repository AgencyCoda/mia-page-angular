import { TestBed } from '@angular/core/testing';

import { MiaPageViewerService } from './mia-page-viewer.service';

describe('MiaPageViewerService', () => {
  let service: MiaPageViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaPageViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
