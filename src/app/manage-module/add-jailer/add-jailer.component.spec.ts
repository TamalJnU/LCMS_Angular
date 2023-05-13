import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJailerComponent } from './add-jailer.component';

describe('AddJailerComponent', () => {
  let component: AddJailerComponent;
  let fixture: ComponentFixture<AddJailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
