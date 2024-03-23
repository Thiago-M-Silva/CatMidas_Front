import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesenhoComponent } from './form-desenho.component';

describe('FormDesenhoComponent', () => {
  let component: FormDesenhoComponent;
  let fixture: ComponentFixture<FormDesenhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDesenhoComponent]
    });
    fixture = TestBed.createComponent(FormDesenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
