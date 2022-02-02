import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBlanksElementComponent } from './fill-blanks-element.component';

describe('FillBlanksElementComponent', () => {
  let component: FillBlanksElementComponent;
  let fixture: ComponentFixture<FillBlanksElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillBlanksElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBlanksElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
