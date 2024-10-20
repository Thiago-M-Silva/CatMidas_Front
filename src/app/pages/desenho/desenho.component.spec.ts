import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenhoComponent } from './desenho.component';

describe('DesenhoComponent', () => {
  let component: DesenhoComponent;
  let fixture: ComponentFixture<DesenhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesenhoComponent]
    });
    fixture = TestBed.createComponent(DesenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
