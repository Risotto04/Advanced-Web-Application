import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutShippingDetailsComponent } from './checkout-shipping-details.component';

describe('CheckoutShippingDetailsComponent', () => {
  let component: CheckoutShippingDetailsComponent;
  let fixture: ComponentFixture<CheckoutShippingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutShippingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutShippingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
