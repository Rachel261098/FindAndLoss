import { TestBed, inject } from '@angular/core/testing';

import { KriterionToItemService } from './kriterion-to-item.service';

describe('KriterionToItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KriterionToItemService]
    });
  });

  it('should be created', inject([KriterionToItemService], (service: KriterionToItemService) => {
    expect(service).toBeTruthy();
  }));
});
