import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPageManagementComponent } from './mia-page-management.component';

describe('MiaPageManagementComponent', () => {
  let component: MiaPageManagementComponent;
  let fixture: ComponentFixture<MiaPageManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPageManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPageManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
