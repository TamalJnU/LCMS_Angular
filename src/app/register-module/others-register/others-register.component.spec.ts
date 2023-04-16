import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersRegisterComponent } from './others-register.component';

describe('OthersRegisterComponent', () => {
  let component: OthersRegisterComponent;
  let fixture: ComponentFixture<OthersRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
