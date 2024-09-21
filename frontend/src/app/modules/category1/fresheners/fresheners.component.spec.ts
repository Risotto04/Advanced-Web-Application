import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshenersComponent } from './fresheners.component';

describe('FreshenersComponent', () => {
  let component: FreshenersComponent;
  let fixture: ComponentFixture<FreshenersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreshenersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
