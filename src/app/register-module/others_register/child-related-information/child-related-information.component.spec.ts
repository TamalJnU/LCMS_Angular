import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRelatedInformationComponent } from './child-related-information.component';

describe('ChildRelatedInformationComponent', () => {
  let component: ChildRelatedInformationComponent;
  let fixture: ComponentFixture<ChildRelatedInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRelatedInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildRelatedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
