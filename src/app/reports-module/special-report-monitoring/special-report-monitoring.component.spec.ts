import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialReportMonitoringComponent } from './special-report-monitoring.component';

describe('SpecialReportMonitoringComponent', () => {
  let component: SpecialReportMonitoringComponent;
  let fixture: ComponentFixture<SpecialReportMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialReportMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialReportMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
