import { TestBed } from '@angular/core/testing';

import { AjailerServiceService } from './ajailer-service.service';

describe('AjailerServiceService', () => {
  let service: AjailerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjailerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
