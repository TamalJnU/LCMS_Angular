import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFormsComponent } from './other-forms.component';

describe('OtherFormsComponent', () => {
  let component: OtherFormsComponent;
  let fixture: ComponentFixture<OtherFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
