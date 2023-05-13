import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJudgeComponent } from './add-judge.component';

describe('AddJudgeComponent', () => {
  let component: AddJudgeComponent;
  let fixture: ComponentFixture<AddJudgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJudgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
