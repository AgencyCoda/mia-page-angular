import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaContainerPrintElementComponent } from './mia-container-print-element.component';

describe('MiaContainerPrintElementComponent', () => {
  let component: MiaContainerPrintElementComponent;
  let fixture: ComponentFixture<MiaContainerPrintElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaContainerPrintElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaContainerPrintElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
