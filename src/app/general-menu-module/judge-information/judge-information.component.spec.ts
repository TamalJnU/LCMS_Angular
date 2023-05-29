import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeInformationComponent } from './judge-information.component';

describe('JudgeInformationComponent', () => {
  let component: JudgeInformationComponent;
  let fixture: ComponentFixture<JudgeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgeInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
