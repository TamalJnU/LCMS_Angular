import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNidComponent } from './search-nid.component';

describe('SearchNidComponent', () => {
  let component: SearchNidComponent;
  let fixture: ComponentFixture<SearchNidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
