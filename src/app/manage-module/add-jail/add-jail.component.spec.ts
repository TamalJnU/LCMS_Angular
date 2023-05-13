import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJailComponent } from './add-jail.component';

describe('AddJailComponent', () => {
  let component: AddJailComponent;
  let fixture: ComponentFixture<AddJailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
