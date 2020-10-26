import { TestBed } from '@angular/core/testing';

import { LostService } from './lost.service';

describe('LostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LostService = TestBed.get(LostService);
    expect(service).toBeTruthy();
  });
});
