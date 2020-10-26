import { TestBed } from '@angular/core/testing';

import { FoundService } from './found.service';

describe('FoundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoundService = TestBed.get(FoundService);
    expect(service).toBeTruthy();
  });
});
