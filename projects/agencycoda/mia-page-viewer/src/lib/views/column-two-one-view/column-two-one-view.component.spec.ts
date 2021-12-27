import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTwoOneViewComponent } from './column-two-one-view.component';

describe('ColumnTwoOneViewComponent', () => {
  let component: ColumnTwoOneViewComponent;
  let fixture: ComponentFixture<ColumnTwoOneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnTwoOneViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTwoOneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
