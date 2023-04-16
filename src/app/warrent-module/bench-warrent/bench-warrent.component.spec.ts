import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchWarrentComponent } from './bench-warrent.component';

describe('BenchWarrentComponent', () => {
  let component: BenchWarrentComponent;
  let fixture: ComponentFixture<BenchWarrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchWarrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchWarrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
