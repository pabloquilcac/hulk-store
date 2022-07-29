import { TestBed } from '@angular/core/testing';

import { VarsharedService } from './varshared.service';

describe('VarsharedService', () => {
  let service: VarsharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarsharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
