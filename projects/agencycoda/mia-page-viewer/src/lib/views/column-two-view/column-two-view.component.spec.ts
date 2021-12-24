import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTwoViewComponent } from './column-two-view.component';

describe('ColumnTwoViewComponent', () => {
  let component: ColumnTwoViewComponent;
  let fixture: ComponentFixture<ColumnTwoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnTwoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTwoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
