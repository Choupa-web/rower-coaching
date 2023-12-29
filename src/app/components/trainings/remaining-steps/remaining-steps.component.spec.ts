import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingStepsComponent } from './remaining-steps.component';

describe('RemainingStepsComponent', () => {
  let component: RemainingStepsComponent;
  let fixture: ComponentFixture<RemainingStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemainingStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemainingStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
