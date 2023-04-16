import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationVerificationComponent } from './information-verification.component';

describe('InformationVerificationComponent', () => {
  let component: InformationVerificationComponent;
  let fixture: ComponentFixture<InformationVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
