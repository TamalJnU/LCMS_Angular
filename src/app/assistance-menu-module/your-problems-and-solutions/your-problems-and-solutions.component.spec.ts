import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProblemsAndSolutionsComponent } from './your-problems-and-solutions.component';

describe('YourProblemsAndSolutionsComponent', () => {
  let component: YourProblemsAndSolutionsComponent;
  let fixture: ComponentFixture<YourProblemsAndSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourProblemsAndSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourProblemsAndSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
