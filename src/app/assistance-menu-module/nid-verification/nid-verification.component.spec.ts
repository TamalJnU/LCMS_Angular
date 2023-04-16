import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidVerificationComponent } from './nid-verification.component';

describe('NidVerificationComponent', () => {
  let component: NidVerificationComponent;
  let fixture: ComponentFixture<NidVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NidVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NidVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
