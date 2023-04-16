import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraffickingRelatedCaseMenuComponent } from './trafficking-related-case-menu.component';

describe('TraffickingRelatedCaseMenuComponent', () => {
  let component: TraffickingRelatedCaseMenuComponent;
  let fixture: ComponentFixture<TraffickingRelatedCaseMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraffickingRelatedCaseMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraffickingRelatedCaseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
