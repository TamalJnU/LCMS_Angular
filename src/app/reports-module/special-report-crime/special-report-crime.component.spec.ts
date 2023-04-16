import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialReportCrimeComponent } from './special-report-crime.component';

describe('SpecialReportCrimeComponent', () => {
  let component: SpecialReportCrimeComponent;
  let fixture: ComponentFixture<SpecialReportCrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialReportCrimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialReportCrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
