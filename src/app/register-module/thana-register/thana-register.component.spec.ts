import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanaRegisterComponent } from './thana-register.component';

describe('ThanaRegisterComponent', () => {
  let component: ThanaRegisterComponent;
  let fixture: ComponentFixture<ThanaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanaRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
