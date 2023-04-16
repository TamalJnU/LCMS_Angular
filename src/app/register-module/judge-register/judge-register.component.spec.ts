import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeRegisterComponent } from './judge-register.component';

describe('JudgeRegisterComponent', () => {
  let component: JudgeRegisterComponent;
  let fixture: ComponentFixture<JudgeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgeRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
