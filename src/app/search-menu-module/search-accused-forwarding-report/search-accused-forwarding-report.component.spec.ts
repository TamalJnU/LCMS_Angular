import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccusedForwardingReportComponent } from './search-accused-forwarding-report.component';

describe('SearchAccusedForwardingReportComponent', () => {
  let component: SearchAccusedForwardingReportComponent;
  let fixture: ComponentFixture<SearchAccusedForwardingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAccusedForwardingReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAccusedForwardingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
