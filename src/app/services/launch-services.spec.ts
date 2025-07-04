import { TestBed } from '@angular/core/testing';

import { LaunchServices } from './launch-services';

describe('LaunchServices', () => {
  let service: LaunchServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
