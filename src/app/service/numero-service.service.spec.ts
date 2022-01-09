import { TestBed } from '@angular/core/testing';

import { NumeroServiceService } from './numero-service.service';

describe('NumeroServiceService', () => {
  let service: NumeroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumeroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
