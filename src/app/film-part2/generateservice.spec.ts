import { TestBed } from '@angular/core/testing';

import { Generateservice } from './generateservice';

describe('Generateservice', () => {
  let service: Generateservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generateservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
