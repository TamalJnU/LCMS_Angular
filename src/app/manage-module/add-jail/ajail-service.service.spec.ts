import { TestBed } from '@angular/core/testing';

import { AjailServiceService } from './ajail-service.service';

describe('AjailServiceService', () => {
  let service: AjailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
