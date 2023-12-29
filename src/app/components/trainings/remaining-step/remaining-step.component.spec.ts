import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingStepComponent } from './remaining-step.component';

describe('RemainingStepComponent', () => {
  let component: RemainingStepComponent;
  let fixture: ComponentFixture<RemainingStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemainingStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemainingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
