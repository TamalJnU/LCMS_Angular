import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanasReportsComponent } from './thanas-reports.component';

describe('ThanasReportsComponent', () => {
  let component: ThanasReportsComponent;
  let fixture: ComponentFixture<ThanasReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanasReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanasReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
