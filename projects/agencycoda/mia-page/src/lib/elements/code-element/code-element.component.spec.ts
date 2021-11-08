import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeElementComponent } from './code-element.component';

describe('CodeElementComponent', () => {
  let component: CodeElementComponent;
  let fixture: ComponentFixture<CodeElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
