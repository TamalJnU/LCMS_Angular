import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatingOfficersReportComponent } from './investigating-officers-report.component';

describe('InvestigatingOfficersReportComponent', () => {
  let component: InvestigatingOfficersReportComponent;
  let fixture: ComponentFixture<InvestigatingOfficersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigatingOfficersReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigatingOfficersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
