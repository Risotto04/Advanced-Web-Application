import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromaCandlesComponent } from './aroma-candles.component';

describe('AromaCandlesComponent', () => {
  let component: AromaCandlesComponent;
  let fixture: ComponentFixture<AromaCandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AromaCandlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AromaCandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
