import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrentsListComponent } from './warrents-list.component';

describe('WarrentsListComponent', () => {
  let component: WarrentsListComponent;
  let fixture: ComponentFixture<WarrentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
