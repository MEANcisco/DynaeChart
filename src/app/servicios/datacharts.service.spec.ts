import { TestBed } from '@angular/core/testing';

import { DatachartsService } from './datacharts.service';

describe('PeticioneshttpService', () => {
  let service: DatachartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatachartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
