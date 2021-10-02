import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaElementActionsComponent } from './mia-element-actions.component';

describe('MiaElementActionsComponent', () => {
  let component: MiaElementActionsComponent;
  let fixture: ComponentFixture<MiaElementActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaElementActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaElementActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
