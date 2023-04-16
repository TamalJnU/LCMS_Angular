import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManualsComponent } from './user-manuals.component';

describe('UserManualsComponent', () => {
  let component: UserManualsComponent;
  let fixture: ComponentFixture<UserManualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManualsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
