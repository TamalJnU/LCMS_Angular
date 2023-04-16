import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCaseEntryComponent } from './person-case-entry.component';

describe('PersonCaseEntryComponent', () => {
  let component: PersonCaseEntryComponent;
  let fixture: ComponentFixture<PersonCaseEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCaseEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonCaseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
