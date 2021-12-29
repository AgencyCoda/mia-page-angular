import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaViewerPageComponent } from './mia-viewer-page.component';

describe('MiaViewerPageComponent', () => {
  let component: MiaViewerPageComponent;
  let fixture: ComponentFixture<MiaViewerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaViewerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaViewerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
