import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffLostAndFoundComponent } from './stuff-lost-and-found.component';

describe('StuffLostAndFoundComponent', () => {
  let component: StuffLostAndFoundComponent;
  let fixture: ComponentFixture<StuffLostAndFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffLostAndFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffLostAndFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
