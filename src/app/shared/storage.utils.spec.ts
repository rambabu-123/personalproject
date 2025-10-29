import { TestBed } from '@angular/core/testing';

import { StorageUtils } from './storage.utils';

describe('StorageUtils', () => {
  let service: StorageUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
