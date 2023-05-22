import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWarrentRegisterComponent } from './search-warrent-register.component';

describe('SearchWarrentRegisterComponent', () => {
  let component: SearchWarrentRegisterComponent;
  let fixture: ComponentFixture<SearchWarrentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWarrentRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchWarrentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
