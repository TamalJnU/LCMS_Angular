import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonGeneralDiaryEntryComponent } from './person-general-diary-entry.component';

describe('PersonGeneralDiaryEntryComponent', () => {
  let component: PersonGeneralDiaryEntryComponent;
  let fixture: ComponentFixture<PersonGeneralDiaryEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonGeneralDiaryEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonGeneralDiaryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
