import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPersonsComponent } from './lost-persons.component';

describe('LostPersonsComponent', () => {
  let component: LostPersonsComponent;
  let fixture: ComponentFixture<LostPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostPersonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
