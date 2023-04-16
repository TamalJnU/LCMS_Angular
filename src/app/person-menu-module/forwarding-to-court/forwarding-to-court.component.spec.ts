import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardingToCourtComponent } from './forwarding-to-court.component';

describe('ForwardingToCourtComponent', () => {
  let component: ForwardingToCourtComponent;
  let fixture: ComponentFixture<ForwardingToCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardingToCourtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardingToCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
