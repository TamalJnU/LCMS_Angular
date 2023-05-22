import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchWarrentRegisterComponent } from './bench-warrent-register.component';

describe('BenchWarrentRegisterComponent', () => {
  let component: BenchWarrentRegisterComponent;
  let fixture: ComponentFixture<BenchWarrentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchWarrentRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchWarrentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
