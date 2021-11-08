import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteElementComponent } from './quote-element.component';

describe('QuoteElementComponent', () => {
  let component: QuoteElementComponent;
  let fixture: ComponentFixture<QuoteElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
