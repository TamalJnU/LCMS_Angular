import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInvestigationReportComponent } from './details-investigation-report.component';

describe('DetailsInvestigationReportComponent', () => {
  let component: DetailsInvestigationReportComponent;
  let fixture: ComponentFixture<DetailsInvestigationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsInvestigationReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsInvestigationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
