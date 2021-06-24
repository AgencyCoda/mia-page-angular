import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPageEditorComponent } from './mia-page-editor.component';

describe('MiaPageEditorComponent', () => {
  let component: MiaPageEditorComponent;
  let fixture: ComponentFixture<MiaPageEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPageEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
