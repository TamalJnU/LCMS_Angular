import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtVerdictRegisterComponent } from './court-verdict-register.component';

describe('CourtVerdictRegisterComponent', () => {
  let component: CourtVerdictRegisterComponent;
  let fixture: ComponentFixture<CourtVerdictRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtVerdictRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtVerdictRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
