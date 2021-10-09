import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPageSlugViewerComponent } from './mia-page-slug-viewer.component';

describe('MiaPageSlugViewerComponent', () => {
  let component: MiaPageSlugViewerComponent;
  let fixture: ComponentFixture<MiaPageSlugViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPageSlugViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPageSlugViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
