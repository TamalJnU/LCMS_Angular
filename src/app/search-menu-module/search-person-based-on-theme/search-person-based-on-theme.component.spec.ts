import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonBasedOnThemeComponent } from './search-person-based-on-theme.component';

describe('SearchPersonBasedOnThemeComponent', () => {
  let component: SearchPersonBasedOnThemeComponent;
  let fixture: ComponentFixture<SearchPersonBasedOnThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPersonBasedOnThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPersonBasedOnThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
