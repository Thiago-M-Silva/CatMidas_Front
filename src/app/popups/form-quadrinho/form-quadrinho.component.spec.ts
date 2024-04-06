import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuadrinhoComponent } from './form-quadrinho.component';

describe('FormQuadrinhoComponent', () => {
  let component: FormQuadrinhoComponent;
  let fixture: ComponentFixture<FormQuadrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormQuadrinhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormQuadrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
