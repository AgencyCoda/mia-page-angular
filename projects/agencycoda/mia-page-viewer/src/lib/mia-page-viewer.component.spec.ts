import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPageViewerComponent } from './mia-page-viewer.component';

describe('MiaPageViewerComponent', () => {
  let component: MiaPageViewerComponent;
  let fixture: ComponentFixture<MiaPageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPageViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
