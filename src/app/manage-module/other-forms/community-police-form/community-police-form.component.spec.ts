import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPoliceFormComponent } from './community-police-form.component';

describe('CommunityPoliceFormComponent', () => {
  let component: CommunityPoliceFormComponent;
  let fixture: ComponentFixture<CommunityPoliceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPoliceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityPoliceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
