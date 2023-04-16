import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtInformationComponent } from './court-information.component';

describe('CourtInformationComponent', () => {
  let component: CourtInformationComponent;
  let fixture: ComponentFixture<CourtInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
