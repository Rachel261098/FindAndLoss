import { TestBed, inject } from '@angular/core/testing';

import { TypeValueService } from './type-value.service';

describe('TypeValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeValueService]
    });
  });

  it('should be created', inject([TypeValueService], (service: TypeValueService) => {
    expect(service).toBeTruthy();
  }));
});
