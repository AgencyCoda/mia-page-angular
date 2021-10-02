import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPrintViewComponent } from './mia-print-view.component';

describe('MiaPrintViewComponent', () => {
  let component: MiaPrintViewComponent;
  let fixture: ComponentFixture<MiaPrintViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPrintViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPrintViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
