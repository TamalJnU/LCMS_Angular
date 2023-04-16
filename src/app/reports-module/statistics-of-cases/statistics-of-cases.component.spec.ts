import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsOfCasesComponent } from './statistics-of-cases.component';

describe('StatisticsOfCasesComponent', () => {
  let component: StatisticsOfCasesComponent;
  let fixture: ComponentFixture<StatisticsOfCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsOfCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsOfCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
