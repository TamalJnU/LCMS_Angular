import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPersonEntryComponent } from './lost-person-entry.component';

describe('LostPersonEntryComponent', () => {
  let component: LostPersonEntryComponent;
  let fixture: ComponentFixture<LostPersonEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostPersonEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostPersonEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
