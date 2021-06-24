import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPrintElementsComponent } from './mia-print-elements.component';

describe('MiaPrintElementsComponent', () => {
  let component: MiaPrintElementsComponent;
  let fixture: ComponentFixture<MiaPrintElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPrintElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPrintElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
