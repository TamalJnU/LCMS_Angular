import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCaseBasedOnThemeComponent } from './search-case-based-on-theme.component';

describe('SearchCaseBasedOnThemeComponent', () => {
  let component: SearchCaseBasedOnThemeComponent;
  let fixture: ComponentFixture<SearchCaseBasedOnThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCaseBasedOnThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCaseBasedOnThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
