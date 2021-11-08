import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryElementComponent } from './gallery-element.component';

describe('GalleryElementComponent', () => {
  let component: GalleryElementComponent;
  let fixture: ComponentFixture<GalleryElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
