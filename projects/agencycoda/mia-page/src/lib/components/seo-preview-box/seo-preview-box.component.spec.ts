import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoPreviewBoxComponent } from './seo-preview-box.component';

describe('SeoPreviewBoxComponent', () => {
  let component: SeoPreviewBoxComponent;
  let fixture: ComponentFixture<SeoPreviewBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoPreviewBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoPreviewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
