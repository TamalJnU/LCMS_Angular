import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpInformationComponent } from './pp-information.component';

describe('PpInformationComponent', () => {
  let component: PpInformationComponent;
  let fixture: ComponentFixture<PpInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
