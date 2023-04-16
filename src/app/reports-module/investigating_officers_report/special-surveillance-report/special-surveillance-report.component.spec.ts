import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSurveillanceReportComponent } from './special-surveillance-report.component';

describe('SpecialSurveillanceReportComponent', () => {
  let component: SpecialSurveillanceReportComponent;
  let fixture: ComponentFixture<SpecialSurveillanceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialSurveillanceReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialSurveillanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
