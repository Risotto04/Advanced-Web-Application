import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriedFlowersComponent } from './dried-flowers.component';

describe('DriedFlowersComponent', () => {
  let component: DriedFlowersComponent;
  let fixture: ComponentFixture<DriedFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriedFlowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriedFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
