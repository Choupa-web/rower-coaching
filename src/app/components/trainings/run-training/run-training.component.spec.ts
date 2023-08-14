import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunTrainingComponent } from './run-training.component';

describe('RunTrainingComponent', () => {
  let component: RunTrainingComponent;
  let fixture: ComponentFixture<RunTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunTrainingComponent]
    });
    fixture = TestBed.createComponent(RunTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
