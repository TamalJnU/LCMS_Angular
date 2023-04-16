import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcmsStatisticsComponent } from './lcms-statistics.component';

describe('LcmsStatisticsComponent', () => {
  let component: LcmsStatisticsComponent;
  let fixture: ComponentFixture<LcmsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcmsStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcmsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
