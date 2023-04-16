import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPolicingOfficerComponent } from './community-policing-officer.component';

describe('CommunityPolicingOfficerComponent', () => {
  let component: CommunityPolicingOfficerComponent;
  let fixture: ComponentFixture<CommunityPolicingOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPolicingOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityPolicingOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
