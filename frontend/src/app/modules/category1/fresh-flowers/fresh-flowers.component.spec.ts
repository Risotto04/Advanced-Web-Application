import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshFlowersComponent } from './fresh-flowers.component';

describe('Fresh-FlowersComponent', () => {
  let component: FreshFlowersComponent;
  let fixture: ComponentFixture<FreshFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreshFlowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
