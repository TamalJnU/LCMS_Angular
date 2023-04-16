import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCaseSearchComponent } from './advanced-case-search.component';

describe('AdvancedCaseSearchComponent', () => {
  let component: AdvancedCaseSearchComponent;
  let fixture: ComponentFixture<AdvancedCaseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedCaseSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedCaseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
