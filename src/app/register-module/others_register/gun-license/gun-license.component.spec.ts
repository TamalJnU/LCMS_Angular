import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunLicenseComponent } from './gun-license.component';

describe('GunLicenseComponent', () => {
  let component: GunLicenseComponent;
  let fixture: ComponentFixture<GunLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunLicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GunLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
