import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingStepComponent } from './training-step.component';

describe('TrainingStepComponent', () => {
  let component: TrainingStepComponent;
  let fixture: ComponentFixture<TrainingStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
