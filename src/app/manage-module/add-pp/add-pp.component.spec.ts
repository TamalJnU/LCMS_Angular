import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPpComponent } from './add-pp.component';

describe('AddPpComponent', () => {
  let component: AddPpComponent;
  let fixture: ComponentFixture<AddPpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
