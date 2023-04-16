import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCaseBasedOnInstitutionComponent } from './search-case-based-on-institution.component';

describe('SearchCaseBasedOnInstitutionComponent', () => {
  let component: SearchCaseBasedOnInstitutionComponent;
  let fixture: ComponentFixture<SearchCaseBasedOnInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCaseBasedOnInstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCaseBasedOnInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
