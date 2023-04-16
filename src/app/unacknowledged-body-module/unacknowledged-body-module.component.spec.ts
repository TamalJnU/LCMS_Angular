import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnacknowledgedBodyModuleComponent } from './unacknowledged-body-module.component';

describe('UnacknowledgedBodyModuleComponent', () => {
  let component: UnacknowledgedBodyModuleComponent;
  let fixture: ComponentFixture<UnacknowledgedBodyModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnacknowledgedBodyModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnacknowledgedBodyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
