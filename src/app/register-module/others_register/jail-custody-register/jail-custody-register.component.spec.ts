import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailCustodyRegisterComponent } from './jail-custody-register.component';

describe('JailCustodyRegisterComponent', () => {
  let component: JailCustodyRegisterComponent;
  let fixture: ComponentFixture<JailCustodyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JailCustodyRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JailCustodyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
