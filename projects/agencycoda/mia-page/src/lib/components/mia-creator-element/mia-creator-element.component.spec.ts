import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaCreatorElementComponent } from './mia-creator-element.component';

describe('MiaCreatorElementComponent', () => {
  let component: MiaCreatorElementComponent;
  let fixture: ComponentFixture<MiaCreatorElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaCreatorElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaCreatorElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
