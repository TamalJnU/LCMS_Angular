import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailerInformationComponent } from './jailer-information.component';

describe('JailerInformationComponent', () => {
  let component: JailerInformationComponent;
  let fixture: ComponentFixture<JailerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JailerInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JailerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
