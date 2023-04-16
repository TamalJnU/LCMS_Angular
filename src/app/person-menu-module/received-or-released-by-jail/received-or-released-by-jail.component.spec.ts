import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedOrReleasedByJailComponent } from './received-or-released-by-jail.component';

describe('ReceivedOrReleasedByJailComponent', () => {
  let component: ReceivedOrReleasedByJailComponent;
  let fixture: ComponentFixture<ReceivedOrReleasedByJailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedOrReleasedByJailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedOrReleasedByJailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
