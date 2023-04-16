import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrentModuleComponent } from './warrent-module.component';

describe('WarrentModuleComponent', () => {
  let component: WarrentModuleComponent;
  let fixture: ComponentFixture<WarrentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrentModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
