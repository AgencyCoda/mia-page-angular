import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnOneTwoComponent } from './column-one-two.component';

describe('ColumnOneTwoComponent', () => {
  let component: ColumnOneTwoComponent;
  let fixture: ComponentFixture<ColumnOneTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnOneTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnOneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
