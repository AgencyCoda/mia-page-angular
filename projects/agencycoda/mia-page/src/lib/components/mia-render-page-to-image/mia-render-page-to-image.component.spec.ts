import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaRenderPageToImageComponent } from './mia-render-page-to-image.component';

describe('MiaRenderPageToImageComponent', () => {
  let component: MiaRenderPageToImageComponent;
  let fixture: ComponentFixture<MiaRenderPageToImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaRenderPageToImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaRenderPageToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
