import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrinhosComponent } from './quadrinhos.component';

describe('QuadrinhosComponent', () => {
  let component: QuadrinhosComponent;
  let fixture: ComponentFixture<QuadrinhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuadrinhosComponent]
    });
    fixture = TestBed.createComponent(QuadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
