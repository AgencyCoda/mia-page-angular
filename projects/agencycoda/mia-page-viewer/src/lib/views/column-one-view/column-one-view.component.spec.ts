import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnOneViewComponent } from './column-one-view.component';

describe('ColumnOneViewComponent', () => {
  let component: ColumnOneViewComponent;
  let fixture: ComponentFixture<ColumnOneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnOneViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnOneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
