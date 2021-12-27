import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnThreeViewComponent } from './column-three-view.component';

describe('ColumnThreeViewComponent', () => {
  let component: ColumnThreeViewComponent;
  let fixture: ComponentFixture<ColumnThreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnThreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnThreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
