import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapeAndWomenRelatedCasesComponent } from './rape-and-women-related-cases.component';

describe('RapeAndWomenRelatedCasesComponent', () => {
  let component: RapeAndWomenRelatedCasesComponent;
  let fixture: ComponentFixture<RapeAndWomenRelatedCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapeAndWomenRelatedCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapeAndWomenRelatedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
