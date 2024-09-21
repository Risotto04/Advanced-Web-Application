import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutContatinfoComponent } from './checkout-contatinfo.component';

describe('CheckoutContatinfoComponent', () => {
  let component: CheckoutContatinfoComponent;
  let fixture: ComponentFixture<CheckoutContatinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutContatinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutContatinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
