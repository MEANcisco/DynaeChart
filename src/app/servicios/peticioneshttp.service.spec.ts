import { TestBed } from '@angular/core/testing';

import { PeticioneshttpService } from './peticioneshttp.service';

describe('PeticioneshttpService', () => {
  let service: PeticioneshttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticioneshttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
