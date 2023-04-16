import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailsReportsComponent } from './jails-reports.component';

describe('JailsReportsComponent', () => {
  let component: JailsReportsComponent;
  let fixture: ComponentFixture<JailsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JailsReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JailsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
