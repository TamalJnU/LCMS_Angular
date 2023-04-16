import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCaseBasedOnPersonsThemeComponent } from './search-case-based-on-persons-theme.component';

describe('SearchCaseBasedOnPersonsThemeComponent', () => {
  let component: SearchCaseBasedOnPersonsThemeComponent;
  let fixture: ComponentFixture<SearchCaseBasedOnPersonsThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCaseBasedOnPersonsThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCaseBasedOnPersonsThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
