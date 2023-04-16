import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPersonSearchComponent } from './lost-person-search.component';

describe('LostPersonSearchComponent', () => {
  let component: LostPersonSearchComponent;
  let fixture: ComponentFixture<LostPersonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostPersonSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostPersonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
