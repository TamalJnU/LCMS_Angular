import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSystemLogComponent } from './manage-system-log.component';

describe('ManageSystemLogComponent', () => {
  let component: ManageSystemLogComponent;
  let fixture: ComponentFixture<ManageSystemLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSystemLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSystemLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
