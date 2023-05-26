import { TestBed } from '@angular/core/testing';

import { ApserviceService } from './apservice.service';

describe('ApserviceService', () => {
  let service: ApserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
