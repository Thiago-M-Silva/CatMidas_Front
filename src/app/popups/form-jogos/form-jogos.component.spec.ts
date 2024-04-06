import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJogosComponent } from './form-jogos.component';

describe('FormJogosComponent', () => {
  let component: FormJogosComponent;
  let fixture: ComponentFixture<FormJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormJogosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
