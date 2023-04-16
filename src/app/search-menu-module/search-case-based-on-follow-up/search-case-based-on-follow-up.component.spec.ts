import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCaseBasedOnFollowUpComponent } from './search-case-based-on-follow-up.component';

describe('SearchCaseBasedOnFollowUpComponent', () => {
  let component: SearchCaseBasedOnFollowUpComponent;
  let fixture: ComponentFixture<SearchCaseBasedOnFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCaseBasedOnFollowUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCaseBasedOnFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
