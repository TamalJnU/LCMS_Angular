import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnacknowledgedBodyComponent } from './unacknowledged-body.component';

describe('UnacknowledgedBodyComponent', () => {
  let component: UnacknowledgedBodyComponent;
  let fixture: ComponentFixture<UnacknowledgedBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnacknowledgedBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnacknowledgedBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
