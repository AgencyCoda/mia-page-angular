import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPrintElementComponent } from './mia-print-element.component';

describe('MiaPrintElementComponent', () => {
  let component: MiaPrintElementComponent;
  let fixture: ComponentFixture<MiaPrintElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPrintElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPrintElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
