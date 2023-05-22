import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtSummonsRegisterComponent } from './court-summons-register.component';

describe('CourtSummonsRegisterComponent', () => {
  let component: CourtSummonsRegisterComponent;
  let fixture: ComponentFixture<CourtSummonsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtSummonsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtSummonsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
