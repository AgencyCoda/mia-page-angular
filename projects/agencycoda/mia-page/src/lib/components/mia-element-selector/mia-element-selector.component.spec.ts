import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaElementSelectorComponent } from './mia-element-selector.component';

describe('MiaElementSelectorComponent', () => {
  let component: MiaElementSelectorComponent;
  let fixture: ComponentFixture<MiaElementSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaElementSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaElementSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
