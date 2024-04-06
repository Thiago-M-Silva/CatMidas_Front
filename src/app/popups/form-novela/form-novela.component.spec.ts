import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovelaComponent } from './form-novela.component';

describe('FormNovelaComponent', () => {
  let component: FormNovelaComponent;
  let fixture: ComponentFixture<FormNovelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNovelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNovelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
