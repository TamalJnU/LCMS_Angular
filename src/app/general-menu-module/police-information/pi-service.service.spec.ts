import { TestBed } from '@angular/core/testing';

import { PiServiceService } from './pi-service.service';

describe('PiServiceService', () => {
  let service: PiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
