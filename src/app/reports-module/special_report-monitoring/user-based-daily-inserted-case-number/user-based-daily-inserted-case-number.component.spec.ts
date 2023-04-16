import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasedDailyInsertedCaseNumberComponent } from './user-based-daily-inserted-case-number.component';

describe('UserBasedDailyInsertedCaseNumberComponent', () => {
  let component: UserBasedDailyInsertedCaseNumberComponent;
  let fixture: ComponentFixture<UserBasedDailyInsertedCaseNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBasedDailyInsertedCaseNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBasedDailyInsertedCaseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
