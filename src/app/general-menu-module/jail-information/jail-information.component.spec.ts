import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailInformationComponent } from './jail-information.component';

describe('JailInformationComponent', () => {
  let component: JailInformationComponent;
  let fixture: ComponentFixture<JailInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JailInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
