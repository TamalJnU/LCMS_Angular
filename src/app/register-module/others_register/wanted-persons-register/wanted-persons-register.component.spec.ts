import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedPersonsRegisterComponent } from './wanted-persons-register.component';

describe('WantedPersonsRegisterComponent', () => {
  let component: WantedPersonsRegisterComponent;
  let fixture: ComponentFixture<WantedPersonsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantedPersonsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantedPersonsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
