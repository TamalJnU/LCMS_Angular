import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceInformationComponent } from './police-information.component';

describe('PoliceInformationComponent', () => {
  let component: PoliceInformationComponent;
  let fixture: ComponentFixture<PoliceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
