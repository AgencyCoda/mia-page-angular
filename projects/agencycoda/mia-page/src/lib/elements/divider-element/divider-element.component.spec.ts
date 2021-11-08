import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerElementComponent } from './divider-element.component';

describe('DividerElementComponent', () => {
  let component: DividerElementComponent;
  let fixture: ComponentFixture<DividerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
