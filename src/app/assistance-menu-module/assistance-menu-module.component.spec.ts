import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceMenuModuleComponent } from './assistance-menu-module.component';

describe('AssistanceMenuModuleComponent', () => {
  let component: AssistanceMenuModuleComponent;
  let fixture: ComponentFixture<AssistanceMenuModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceMenuModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistanceMenuModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
