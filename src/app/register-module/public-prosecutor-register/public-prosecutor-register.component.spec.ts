import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProsecutorRegisterComponent } from './public-prosecutor-register.component';

describe('PublicProsecutorRegisterComponent', () => {
  let component: PublicProsecutorRegisterComponent;
  let fixture: ComponentFixture<PublicProsecutorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProsecutorRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicProsecutorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
