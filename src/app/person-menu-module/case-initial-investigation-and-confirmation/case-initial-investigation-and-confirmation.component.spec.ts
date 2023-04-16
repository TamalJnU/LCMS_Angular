import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInitialInvestigationAndConfirmationComponent } from './case-initial-investigation-and-confirmation.component';

describe('CaseInitialInvestigationAndConfirmationComponent', () => {
  let component: CaseInitialInvestigationAndConfirmationComponent;
  let fixture: ComponentFixture<CaseInitialInvestigationAndConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseInitialInvestigationAndConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseInitialInvestigationAndConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
