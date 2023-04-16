import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAbuseAndTortureComponent } from './child-abuse-and-torture.component';

describe('ChildAbuseAndTortureComponent', () => {
  let component: ChildAbuseAndTortureComponent;
  let fixture: ComponentFixture<ChildAbuseAndTortureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAbuseAndTortureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAbuseAndTortureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
