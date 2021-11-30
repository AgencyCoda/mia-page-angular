import { TestBed } from '@angular/core/testing';

import { MiaPageFolderModalService } from './mia-page-folder-modal.service';

describe('MiaPageFolderModalService', () => {
  let service: MiaPageFolderModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaPageFolderModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
