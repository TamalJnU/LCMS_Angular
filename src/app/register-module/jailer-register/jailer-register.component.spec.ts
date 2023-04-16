import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailerRegisterComponent } from './jailer-register.component';

describe('JailerRegisterComponent', () => {
  let component: JailerRegisterComponent;
  let fixture: ComponentFixture<JailerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JailerRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JailerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
