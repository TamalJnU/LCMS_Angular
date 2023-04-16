import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtsReportsComponent } from './courts-reports.component';

describe('CourtsReportsComponent', () => {
  let component: CourtsReportsComponent;
  let fixture: ComponentFixture<CourtsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtsReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
