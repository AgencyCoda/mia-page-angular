import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTwoOneComponent } from './column-two-one.component';

describe('ColumnTwoOneComponent', () => {
  let component: ColumnTwoOneComponent;
  let fixture: ComponentFixture<ColumnTwoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnTwoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
