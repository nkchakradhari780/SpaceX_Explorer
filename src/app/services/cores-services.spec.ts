import { TestBed } from '@angular/core/testing';

import { CoresServices } from './cores-services';

describe('CoresServices', () => {
  let service: CoresServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoresServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
