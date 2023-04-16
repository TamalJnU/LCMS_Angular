import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardingToJailComponent } from './forwarding-to-jail.component';

describe('ForwardingToJailComponent', () => {
  let component: ForwardingToJailComponent;
  let fixture: ComponentFixture<ForwardingToJailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardingToJailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardingToJailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
