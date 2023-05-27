import { TestBed } from '@angular/core/testing';

import { AjServiceService } from './aj-service.service';

describe('AjServiceService', () => {
  let service: AjServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
