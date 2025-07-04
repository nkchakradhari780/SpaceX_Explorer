import { TestBed } from '@angular/core/testing';

import { RocketsServices } from './rockets-services';

describe('RocketsServices', () => {
  let service: RocketsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
