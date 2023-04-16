import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtRegisterComponent } from './court-register.component';

describe('CourtRegisterComponent', () => {
  let component: CourtRegisterComponent;
  let fixture: ComponentFixture<CourtRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
