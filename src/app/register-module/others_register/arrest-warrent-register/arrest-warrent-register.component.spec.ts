import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrestWarrentRegisterComponent } from './arrest-warrent-register.component';

describe('ArrestWarrentRegisterComponent', () => {
  let component: ArrestWarrentRegisterComponent;
  let fixture: ComponentFixture<ArrestWarrentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrestWarrentRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrestWarrentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
