import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjournedCaseReportComponent } from './adjourned-case-report.component';

describe('AdjournedCaseReportComponent', () => {
  let component: AdjournedCaseReportComponent;
  let fixture: ComponentFixture<AdjournedCaseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjournedCaseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjournedCaseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
