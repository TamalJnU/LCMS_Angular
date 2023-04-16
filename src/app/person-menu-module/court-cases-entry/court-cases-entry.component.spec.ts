import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtCasesEntryComponent } from './court-cases-entry.component';

describe('CourtCasesEntryComponent', () => {
  let component: CourtCasesEntryComponent;
  let fixture: ComponentFixture<CourtCasesEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtCasesEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtCasesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
