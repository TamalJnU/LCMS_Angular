import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMenuModuleComponent } from './general-menu-module.component';

describe('GeneralMenuModuleComponent', () => {
  let component: GeneralMenuModuleComponent;
  let fixture: ComponentFixture<GeneralMenuModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralMenuModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralMenuModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
