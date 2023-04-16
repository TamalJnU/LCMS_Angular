import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmugglingRelatedCaseMenuComponent } from './smuggling-related-case-menu.component';

describe('SmugglingRelatedCaseMenuComponent', () => {
  let component: SmugglingRelatedCaseMenuComponent;
  let fixture: ComponentFixture<SmugglingRelatedCaseMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmugglingRelatedCaseMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmugglingRelatedCaseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
