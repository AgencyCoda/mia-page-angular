import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceElementComponent } from './space-element.component';

describe('SpaceElementComponent', () => {
  let component: SpaceElementComponent;
  let fixture: ComponentFixture<SpaceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
