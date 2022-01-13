import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueOrFalseElementComponent } from './true-or-false-element.component';

describe('TrueOrFalseElementComponent', () => {
  let component: TrueOrFalseElementComponent;
  let fixture: ComponentFixture<TrueOrFalseElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueOrFalseElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueOrFalseElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
