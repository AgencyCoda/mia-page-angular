import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPageCoreComponent } from './mia-page-core.component';

describe('MiaPageCoreComponent', () => {
  let component: MiaPageCoreComponent;
  let fixture: ComponentFixture<MiaPageCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPageCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPageCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
