import { TestBed } from '@angular/core/testing';

import { CapsuleServices } from './capsule-services';

describe('CapsuleServices', () => {
  let service: CapsuleServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapsuleServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
