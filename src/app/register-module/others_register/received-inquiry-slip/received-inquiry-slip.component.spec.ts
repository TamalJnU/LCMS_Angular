import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedInquirySlipComponent } from './received-inquiry-slip.component';

describe('ReceivedInquirySlipComponent', () => {
  let component: ReceivedInquirySlipComponent;
  let fixture: ComponentFixture<ReceivedInquirySlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedInquirySlipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedInquirySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
