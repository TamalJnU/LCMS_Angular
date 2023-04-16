import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInvestigationProgressComponent } from './case-investigation-progress.component';

describe('CaseInvestigationProgressComponent', () => {
  let component: CaseInvestigationProgressComponent;
  let fixture: ComponentFixture<CaseInvestigationProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseInvestigationProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseInvestigationProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
