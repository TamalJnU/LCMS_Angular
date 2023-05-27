import { TestBed } from '@angular/core/testing';

import { AoServiceService } from './ao-service.service';

describe('AoServiceService', () => {
  let service: AoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
