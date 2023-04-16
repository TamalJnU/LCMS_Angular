import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedInformationVerificationComponent } from './confirmed-information-verification.component';

describe('ConfirmedInformationVerificationComponent', () => {
  let component: ConfirmedInformationVerificationComponent;
  let fixture: ComponentFixture<ConfirmedInformationVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedInformationVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedInformationVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
