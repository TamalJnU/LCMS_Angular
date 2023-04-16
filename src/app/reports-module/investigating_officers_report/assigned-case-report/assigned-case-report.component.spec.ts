import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedCaseReportComponent } from './assigned-case-report.component';

describe('AssignedCaseReportComponent', () => {
  let component: AssignedCaseReportComponent;
  let fixture: ComponentFixture<AssignedCaseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedCaseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedCaseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
