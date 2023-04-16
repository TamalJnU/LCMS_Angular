import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailsmanComponent } from './bailsman.component';

describe('BailsmanComponent', () => {
  let component: BailsmanComponent;
  let fixture: ComponentFixture<BailsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailsmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BailsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
