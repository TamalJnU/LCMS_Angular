import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtSommonsComponent } from './court-sommons.component';

describe('CourtSommonsComponent', () => {
  let component: CourtSommonsComponent;
  let fixture: ComponentFixture<CourtSommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtSommonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtSommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
