import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMenuModuleComponent } from './person-menu-module.component';

describe('PersonMenuModuleComponent', () => {
  let component: PersonMenuModuleComponent;
  let fixture: ComponentFixture<PersonMenuModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonMenuModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonMenuModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
