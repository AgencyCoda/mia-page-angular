import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaManagementDeletedSidebarComponent } from './mia-management-deleted-sidebar.component';

describe('MiaManagementDeletedSidebarComponent', () => {
  let component: MiaManagementDeletedSidebarComponent;
  let fixture: ComponentFixture<MiaManagementDeletedSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaManagementDeletedSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaManagementDeletedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
