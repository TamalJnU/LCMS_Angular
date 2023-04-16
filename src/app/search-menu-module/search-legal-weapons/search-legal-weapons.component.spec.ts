import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLegalWeaponsComponent } from './search-legal-weapons.component';

describe('SearchLegalWeaponsComponent', () => {
  let component: SearchLegalWeaponsComponent;
  let fixture: ComponentFixture<SearchLegalWeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLegalWeaponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLegalWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
