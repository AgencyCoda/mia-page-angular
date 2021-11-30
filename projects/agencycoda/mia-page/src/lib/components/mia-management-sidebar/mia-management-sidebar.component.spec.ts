import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaManagementSidebarComponent } from './mia-management-sidebar.component';

describe('MiaManagementSidebarComponent', () => {
  let component: MiaManagementSidebarComponent;
  let fixture: ComponentFixture<MiaManagementSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaManagementSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaManagementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
