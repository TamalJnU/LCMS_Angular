import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInformationWithoutCaseComponent } from './search-information-without-case.component';

describe('SearchInformationWithoutCaseComponent', () => {
  let component: SearchInformationWithoutCaseComponent;
  let fixture: ComponentFixture<SearchInformationWithoutCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInformationWithoutCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInformationWithoutCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
