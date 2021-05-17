import { TestBed } from '@angular/core/testing';

import { InternalStateService } from './internal-state-service.service';

describe('InternalStateService', () => {
  let service: InternalStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
