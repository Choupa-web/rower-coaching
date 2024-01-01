import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowerAnimateComponent } from './rower-animate.component';

describe('RowerAnimateComponent', () => {
  let component: RowerAnimateComponent;
  let fixture: ComponentFixture<RowerAnimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowerAnimateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowerAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
