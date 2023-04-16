import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfCasesBasedOnCourtAndUnitComponent } from './number-of-cases-based-on-court-and-unit.component';

describe('NumberOfCasesBasedOnCourtAndUnitComponent', () => {
  let component: NumberOfCasesBasedOnCourtAndUnitComponent;
  let fixture: ComponentFixture<NumberOfCasesBasedOnCourtAndUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfCasesBasedOnCourtAndUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOfCasesBasedOnCourtAndUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
