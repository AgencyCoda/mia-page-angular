import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedElementComponent } from './embed-element.component';

describe('EmbedElementComponent', () => {
  let component: EmbedElementComponent;
  let fixture: ComponentFixture<EmbedElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
