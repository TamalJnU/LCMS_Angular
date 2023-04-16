import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonBasedOnCasesThemeComponent } from './search-person-based-on-cases-theme.component';

describe('SearchPersonBasedOnCasesThemeComponent', () => {
  let component: SearchPersonBasedOnCasesThemeComponent;
  let fixture: ComponentFixture<SearchPersonBasedOnCasesThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPersonBasedOnCasesThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPersonBasedOnCasesThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
