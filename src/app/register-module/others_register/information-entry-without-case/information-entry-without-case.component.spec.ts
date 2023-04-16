import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationEntryWithoutCaseComponent } from './information-entry-without-case.component';

describe('InformationEntryWithoutCaseComponent', () => {
  let component: InformationEntryWithoutCaseComponent;
  let fixture: ComponentFixture<InformationEntryWithoutCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationEntryWithoutCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationEntryWithoutCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
