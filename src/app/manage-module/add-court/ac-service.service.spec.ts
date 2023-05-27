import { TestBed } from '@angular/core/testing';

import { AcServiceService } from './ac-service.service';

describe('AcServiceService', () => {
  let service: AcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
