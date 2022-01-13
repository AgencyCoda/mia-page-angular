import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChooiseElementComponent } from './multiple-chooise-element.component';

describe('MultipleChooiseElementComponent', () => {
  let component: MultipleChooiseElementComponent;
  let fixture: ComponentFixture<MultipleChooiseElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChooiseElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChooiseElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
