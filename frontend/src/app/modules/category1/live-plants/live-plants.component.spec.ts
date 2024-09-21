import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePlantsComponent } from './live-plants.component';

describe('LivePlantsComponent', () => {
  let component: LivePlantsComponent;
  let fixture: ComponentFixture<LivePlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivePlantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivePlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
