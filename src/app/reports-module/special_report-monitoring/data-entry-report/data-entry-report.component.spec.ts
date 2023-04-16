import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryReportComponent } from './data-entry-report.component';

describe('DataEntryReportComponent', () => {
  let component: DataEntryReportComponent;
  let fixture: ComponentFixture<DataEntryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
