import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailRegisterComponent } from './jail-register.component';

describe('JailRegisterComponent', () => {
  let component: JailRegisterComponent;
  let fixture: ComponentFixture<JailRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JailRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JailRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
