import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMenuModuleComponent } from './search-menu-module.component';

describe('SearchMenuModuleComponent', () => {
  let component: SearchMenuModuleComponent;
  let fixture: ComponentFixture<SearchMenuModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMenuModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMenuModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
