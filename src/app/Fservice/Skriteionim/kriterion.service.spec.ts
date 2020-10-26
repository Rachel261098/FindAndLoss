import { TestBed, inject } from '@angular/core/testing';

import { KriterionService } from './kriterion.service';

describe('KriterionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KriterionService]
    });
  });

  it('should be created', inject([KriterionService], (service: KriterionService) => {
    expect(service).toBeTruthy();
  }));
});
