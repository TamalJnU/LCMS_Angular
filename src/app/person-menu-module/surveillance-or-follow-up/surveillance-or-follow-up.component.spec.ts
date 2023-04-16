import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceOrFollowUpComponent } from './surveillance-or-follow-up.component';

describe('SurveillanceOrFollowUpComponent', () => {
  let component: SurveillanceOrFollowUpComponent;
  let fixture: ComponentFixture<SurveillanceOrFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveillanceOrFollowUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveillanceOrFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
