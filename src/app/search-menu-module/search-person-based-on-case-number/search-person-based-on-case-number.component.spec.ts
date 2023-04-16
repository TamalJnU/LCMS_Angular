import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonBasedOnCaseNumberComponent } from './search-person-based-on-case-number.component';

describe('SearchPersonBasedOnCaseNumberComponent', () => {
  let component: SearchPersonBasedOnCaseNumberComponent;
  let fixture: ComponentFixture<SearchPersonBasedOnCaseNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPersonBasedOnCaseNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPersonBasedOnCaseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
