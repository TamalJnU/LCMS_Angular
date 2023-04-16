import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrestWarrentComponent } from './arrest-warrent.component';

describe('ArrestWarrentComponent', () => {
  let component: ArrestWarrentComponent;
  let fixture: ComponentFixture<ArrestWarrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrestWarrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrestWarrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
