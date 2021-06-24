import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPageComponent } from './mia-page.component';

describe('MiaPageComponent', () => {
  let component: MiaPageComponent;
  let fixture: ComponentFixture<MiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
