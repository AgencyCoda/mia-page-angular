import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnOneTwoViewComponent } from './column-one-two-view.component';

describe('ColumnOneTwoViewComponent', () => {
  let component: ColumnOneTwoViewComponent;
  let fixture: ComponentFixture<ColumnOneTwoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnOneTwoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnOneTwoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
