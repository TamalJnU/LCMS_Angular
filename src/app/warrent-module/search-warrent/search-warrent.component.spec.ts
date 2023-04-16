import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWarrentComponent } from './search-warrent.component';

describe('SearchWarrentComponent', () => {
  let component: SearchWarrentComponent;
  let fixture: ComponentFixture<SearchWarrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWarrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchWarrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
